package controllers

import "fmt"

type MainController struct {
	BaseController
}

func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.tpl"
}

func (c *MainController) DoGet() {
	c.Data["json"] = c.Querys()
	fmt.Println(string(c.Ctx.Input.RequestBody))
	c.ServeJSON()
}

func (c *MainController) DoPost() {
	url := c.GetString("url")
	c.Data["url"] = url
	c.ServeJSON()
}
