package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/astaxie/beego"
	"io/ioutil"
	"os"
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
