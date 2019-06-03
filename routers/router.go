package routers

import (
	"github.com/astaxie/beego"
	"web/controllers"
)

func init() {
	nsc := beego.NewNamespace("/conf",
		beego.NSRouter("/save", &controllers.ConfigController{}, "POST:Save"),
		beego.NSRouter("/fetch", &controllers.ConfigController{}, "POST:Fetch"),
	)
	nsh := beego.NewNamespace("/history",
		beego.NSRouter("/query", &controllers.HistoryController{}, "POST:Query"),
		beego.NSRouter("/save", &controllers.HistoryController{}, "POST:Save"),
		beego.NSRouter("/update", &controllers.HistoryController{}, "POST:Update"),
		beego.NSRouter("/delete", &controllers.HistoryController{}, "POST:Delete"),
	)
	beego.AddNamespace(nsc, nsh)
	beego.Router("/send", &controllers.MainController{}, "POST:Send")
	beego.Router("/markdown", &controllers.MainController{}, "*:Markdown")
	beego.Router("/", &controllers.MainController{})
}
