package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/astaxie/beego"
	"io/ioutil"
	"os"
	"strconv"
	"time"
	"web/models"
	"web/util"
)

type MainController struct {
	BaseController
}

type Conf struct {
	AppId     string `json:"appId"`
	UserId    string `json:"userId"`
	AppSecret string `json:"appSecret"`
}

func (c *MainController) Get() {
	c.TplName = "index.html"
}

var (
	filename = beego.AppPath + "\\static\\conf.conf"
)

func (c *MainController) Save() {
	data := c.Querys()
	j, _ := json.Marshal(data)
	file, err := os.Create(filename)
	if err != nil {
		fmt.Println(err.Error())
	}
	defer file.Close()
	file.WriteString(string(j))
	c.Data["json"] = data
	c.ServeJSON()
}

func (c *MainController) Fetch() {
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		panic(err.Error())
	}
	var conf Conf
	err = json.Unmarshal(data, &conf)
	if err != nil {
		panic(err.Error())
	}
	c.Data["json"] = conf
	c.ServeJSON()
}

func (c *MainController) Send() {
	start := time.Now().Nanosecond()
	defer func() {
		if r := recover(); r != nil {
			c.FailTime(r, start)
			return
		}
	}()
	qy := c.QueryString()
	url := qy["url"]
	method := qy["method"]
	isSave := qy["isSave"]
	delete(qy, "url")
	delete(qy, "method")
	delete(qy, "isSave")
	var res string
	if method == "POST" {
		res = util.PostForm(url, qy)
	} else if method == "GET" {
		res = util.GetForm(url, qy)
	} else {
		c.FailTime("not support such method", start)
		return
	}
	end := time.Now().Nanosecond()
	exec := end - start
	fmt.Println(exec)
	if isSave == "1" {
		param, _ := json.Marshal(qy)
		history := &models.History{
			Url:    url,
			Method: method,
			Exec:   strconv.Itoa(exec),
			Param:  string(param),
			Result: res,
			Ctime:  time.Now().Format("2006-01-02 15:04:05"),
		}
		_, _ = history.Insert()
	}
	result := make(map[string]interface{})
	_ = json.Unmarshal([]byte(res), &result)
	c.SuccessTime(result, exec)
}
