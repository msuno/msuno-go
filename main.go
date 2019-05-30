package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/plugins/authz"
	"github.com/casbin/casbin"
	"io/ioutil"
	"net/http"
	"strconv"
	_ "web/routers"
	"web/util"
)

func inits()  {
	url := "http://api.polyv.net/live/v3/channel/management/list"
	param := make(map[string]string)
	param["page"] = strconv.FormatInt(1,10)
	param["pageSize"] = strconv.FormatInt(20,10)
	l := url + "?" + util.SignString(param)
	fmt.Println(l)
	resp, err := http.Get(l)
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(string(body))

}

func initp()  {
	url := "http://api.polyv.net/live/v3/channel/management/list"
	param := make(map[string]string)
	param["page"] = strconv.FormatInt(1,10)
	param["pageSize"] = strconv.FormatInt(20,10)
	p := util.Sign(param)
	bytesData, err := json.Marshal(p)
	resp, err := http.Post(url,"application/x-www-form-urlencoded",bytes.NewReader(bytesData))
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(string(body))

}

func main() {
	beego.InsertFilter("/v1/obj/**", beego.BeforeRouter, authz.NewAuthorizer(casbin.NewEnforcer("conf/authz_model.conf", "conf/authz_policy.csv")))
	beego.Run()
}

