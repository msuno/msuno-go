package routers

import (
	"github.com/astaxie/beego"
	"web/controllers"
)

func init() {
	ns := beego.NewNamespace("/conf",
		beego.NSRouter("/save", &controllers.MainController{}, "*:Save"),
		beego.NSRouter("/fetch", &controllers.MainController{}, "*:Fetch"),
	)
	beego.AddNamespace(ns)
	beego.Router("/", &controllers.MainController{})
}
