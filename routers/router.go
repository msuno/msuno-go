package routers

import (
	"web/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
    beego.Router("/doGet", &controllers.MainController{}, "*:DoGet")
    beego.Router("/doPost", &controllers.MainController{}, "*:DoPost")
}
