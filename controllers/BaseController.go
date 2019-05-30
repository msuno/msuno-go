package controllers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
)

type BaseController struct {
	beego.Controller
}
//获取get,post所有参数
func (c *BaseController) Querys() map[string]interface{} {
	result := make(map[string]interface{})
	err := c.Ctx.Request.ParseForm()
	if err != nil{
		logs.Info(err)
	}
	values := c.Ctx.Request.Form
	for k, v := range values{
		if len(v) == 1 {
			result[k] = v[0]
		}else{
			result[k] = v
		}
	}
	return result
}
//获取请求json所有数据
func (c *BaseController) RequestBody() string {
	return string(c.Ctx.Input.RequestBody)
}