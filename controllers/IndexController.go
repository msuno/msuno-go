package controllers

import (
	"fmt"
)

type MainController struct {
	BaseController
}

func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.html"
}

func (c *MainController) DoGet() {
	c.Data["json"] = c.Querys()
	fmt.Println(string(c.Ctx.Input.RequestBody))
	c.SetSession("_current","hello")
	c.ServeJSON()
}

func (c *MainController) DoPost() {
	c.Data["json"] = c.Querys()
	fmt.Println(c.Querys())
	c.SetSession("_current","hello")
	c.ServeJSON()
}

func (c *MainController) Login() {
	fmt.Println(c.Ctx.Input.Context.Request.BasicAuth())
	c.Ctx.Input.Context.Request.SetBasicAuth("admin","123456")
	c.Data["json"]="sfd"
	c.ServeJSON()
}
