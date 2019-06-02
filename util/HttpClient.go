package util

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"
	"time"
)

func GetForm(u string, m map[string]string) string {
	client := &http.Client{
		Timeout: 5 * time.Second,
	}
	buffer := &bytes.Buffer{}
	buffer.WriteString(u)
	buffer.WriteString("?")
	for k, v := range m {
		buffer.WriteString(k)
		buffer.WriteString("=")
		buffer.WriteString(v)
		buffer.WriteString("&")
	}
	u = strings.TrimSuffix(buffer.String(), "&")
	res, err := client.Get(u)
	if err != nil {
		panic(err)
	}
	all, err := ioutil.ReadAll(res.Body)
	return string(all)
}

func PostForm(u string, m map[string]string) string {
	form := make(url.Values)
	for k, v := range m {
		form.Set(k, v)
	}
	client := &http.Client{
		Timeout: 5 * time.Second,
	}
	res, err := client.PostForm(u, form)
	defer res.Body.Close()
	if err != nil {
		panic(err.Error())
	}
	all, err := ioutil.ReadAll(res.Body)
	return string(all)
}

func PostWithJson(u string, v interface{}) string {
	d, e := json.Marshal(v)
	if e != nil {
		panic(e.Error())
	}
	client := &http.Client{}
	res, err := client.Post(u, "application/json", bytes.NewBuffer([]byte(d)))
	if err != nil {
		panic(err.Error())
	}
	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err.Error())
	}
	return string(data)
}
