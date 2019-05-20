package main

import (
	"fmt"
	"github.com/astaxie/beego"
	"io/ioutil"
	"net/http"
	"strconv"
	_ "web/routers"
	"web/util"
)

func init()  {
	url := "https://api.polyv.net/live/v3/channel/switch/get"
	param := make(map[string]string)
	param["channelId"] = strconv.FormatInt(314408,10)
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

func main() {
	beego.Run()
}

