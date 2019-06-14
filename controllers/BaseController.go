package controllers

import (
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
	"time"
)

type BaseController struct {
	beego.Controller
}

//获取get,post所有参数
func (c *BaseController) Querys() map[string]interface{} {
	result := make(map[string]interface{})
	err := c.Ctx.Request.ParseForm()
	if err != nil {
		logs.Info(err)
	}
	values := c.Ctx.Request.Form
	for k, v := range values {
		if len(v) == 1 {
			result[k] = v[0]
		} else {
			result[k] = v
		}
	}
	return result
}

func (c *BaseController) QueryString() map[string]string {
	qy := c.Querys()
	p := make(map[string]string)
	for k, v := range qy {
		p[k] = v.(string)
	}
	return p
}

//获取请求json所有数据
func (c *BaseController) RequestBody() string {
	return string(c.Ctx.Input.RequestBody)
}

func (c *BaseController) Success(v interface{}) {
	res := make(map[string]interface{})
	res["code"] = 0
	res["status"] = "success"
	res["data"] = v
	c.Data["json"] = res
	c.ServeJSON()
}

func (c *BaseController) SuccessJson(v interface{}) {
	res := make(map[string]interface{})
	res["code"] = 0
	res["status"] = "success"
	res["data"] = v
	bytes, _ := json.MarshalIndent(res, "", "	")
	c.Data["json"] = string(bytes)
	c.TplName = "json.html"
}

func (c *BaseController) SuccessTime(v interface{}, start int) {
	res := make(map[string]interface{})
	res["code"] = 0
	res["exec"] = start
	res["status"] = "success"
	res["data"] = v
	c.Data["json"] = res
	c.ServeJSON()
}

func (c *BaseController) Fail(v interface{}) {
	res := make(map[string]interface{})
	res["code"] = -1
	res["status"] = "fail"
	res["data"] = v
	c.Data["json"] = res
	c.ServeJSON()
}

func (c *BaseController) FailTime(v interface{}, start int) {
	end := time.Now().Nanosecond()
	res := make(map[string]interface{})
	res["exec"] = end - start
	res["code"] = -1
	res["status"] = "fail"
	res["data"] = v
	c.Data["json"] = res
	c.ServeJSON()
}
