package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
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
	rds := beego.NewNamespace("/redis",
		beego.NSBefore(func(ctx *context.Context) {
			get := ctx.Input.CruSession.Get("_current")
			if get == nil {
				ctx.ResponseWriter.Write([]byte("no log"))
			}
		}),
		beego.NSRouter("/", &controllers.RedisController{}, "*:Query"),
		beego.NSRouter("/delete", &controllers.RedisController{}, "*:Delete"),
		beego.NSRouter("/fetch", &controllers.RedisController{}, "*:Fetch"),
	)
	beego.AddNamespace(nsc, nsh, rds)
	beego.Router("/upload", &controllers.MainController{}, "PUT:Upload")
	beego.Router("/send", &controllers.MainController{}, "POST:Send")
	beego.Router("/markdown", &controllers.MainController{}, "*:Markdown")
	beego.Router("/", &controllers.MainController{})
}
