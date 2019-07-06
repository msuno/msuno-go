package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/astaxie/beego"
	"github.com/minio/minio-go"
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

func (c *MainController) Markdown() {
	c.Data["json"] = "hello world"
	c.TplName = "json.html"
}

var (
	filename = beego.AppPath + "\\static\\conf.conf"
)

func (c *MainController) Upload() {
	c.Ctx.ResponseWriter.Header().Set("Access-Control-Allow-Origin", "*")    //允许访问源
	c.Ctx.ResponseWriter.Header().Set("Access-Control-Allow-Methods", "PUT") //允许访问方法
	file, header, err := c.GetFile("file")
	if err != nil {
		c.Fail(err.Error())
	}
	client, err := minio.New("minio.polyv.net", "9YYC7L8LHXUV74SH4PBU", "pERBM9wxHdnWOLK8JzGiSpB+Id4v+W35lLpAbxd8", false)
	if err != nil {
		c.Fail(err.Error())
	}
	n, err := client.PutObject("msuno", header.Filename, file, -1, minio.PutObjectOptions{})
	if err != nil {
		fmt.Println("put")
		c.Fail(err.Error())
	}
	fmt.Println(n)
	c.Success(header)
}

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
	err := json.Unmarshal([]byte(res), &result)
	if err != nil {
		c.Success(res)
		return
	}
	c.SuccessTime(result, exec)
}

func (c *MainController) Json() {
	id := c.QueryString()["id"]
	var history models.History
	_, _ = history.Querys().Filter("id", id).Limit(1).All(&history)
	m := make(map[string]interface{})
	_ = json.Unmarshal([]byte(history.Result), &m)
	b, _ := json.MarshalIndent(m, "", "	")
	c.Data["json"] = string(b)
	c.TplName = "json.html"
}