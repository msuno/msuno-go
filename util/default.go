package util

import (
	"bytes"
	"crypto/md5"
	"encoding/hex"
	"github.com/astaxie/beego"
	"strconv"
	"strings"
	"time"
	"sort"
)

func Md5Hex(str string) string {
	m := md5.New()
	m.Write([]byte(str))
	sign := hex.EncodeToString(m.Sum(nil))
	return strings.ToUpper(sign)
}

func MapSign(param map[string]string) string {
	var str bytes.Buffer
	str.WriteString(beego.AppConfig.String("AppSecret"))
	//排序
	var keys []string
	for p := range param{
		keys = append(keys, p)
	}
	sort.Strings(keys)

	for _, k := range keys {
		str.WriteString(k)
		str.WriteString(param[k])
	}
	str.WriteString(beego.AppConfig.String("AppSecret"))
	return Md5Hex(str.String())
}

func Sign(param map[string]string) map[string]string {
	appId := beego.AppConfig.String("AppId")
	t := time.Now().UnixNano() / 1e6
	param["appId"] = appId
	param["timestamp"] = strconv.FormatInt(t,10)
	sign := MapSign(param)
	param["sign"] = sign
	return param
}

func SignString(param map[string]string) string {
	p := Sign(param)
	var str bytes.Buffer
	for k, v := range p{
		str.WriteString(k)
		str.WriteString("=")
		str.WriteString(v)
		str.WriteString("&")
	}
	return strings.TrimSuffix(str.String(), "&")
}