package controllers

type LoginController struct {
	BaseController
}

func (c *LoginController) Get() {
	c.TplName = "login.html"
}

func (c *LoginController) Post() {
	p := c.QueryString()
	c.SuccessJson(p)
}
