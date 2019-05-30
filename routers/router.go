package routers

import (
	"web/controllers"
	"github.com/astaxie/beego"
)

func init() {
	ns := beego.NewNamespace("/v1",
		beego.NSNamespace("obj",
			beego.NSRouter("/login",&controllers.MainController{},"*:Login"),
		),
		beego.NSNamespace("/us",
			beego.NSRouter("/doGet", &controllers.MainController{}, "*:DoGet"),
			beego.NSRouter("/doPost", &controllers.MainController{}, "*:DoPost"),
		),
	)
	beego.AddNamespace(ns)
	beego.Router("/",&controllers.MainController{})
}
