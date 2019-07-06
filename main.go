package main

import (
	"database/sql"
	"fmt"
	"github.com/astaxie/beego"
	"ngrok/server"
	"os/exec"
	_ "web/models"
	_ "web/routers"
)

func OpenUrl(url string)  {
	err := exec.Command("cmd.exe", "/c", "start " + url).Run()
	if err != nil {
		fmt.Println(err.Error())
	}
}

func main() {
	//initDB()
	beego.BConfig.WebConfig.TemplateLeft = "[["
	beego.BConfig.WebConfig.TemplateRight = "]]"
	go OpenUrl("http://127.0.0.1:8090")
	go server.Start()
	beego.Run()
}

func initDB() {
	db, err := sql.Open("sqlite3", "./data.db")
	if err != nil {
		panic(err.Error())
	}
	sql := `
		CREATE TABLE IF NOT EXISTS "history" (
			"id" INTEGER PRIMARY KEY,
			"url" VARCHAR(255) NOT NULL,
			"method" VARCHAR(50) NOT NULL DEFAULT "POST",	
			"param" TEXT NOT NULL,
			"result" TEXT NOT NULL,
			"exec" INTEGER NULL,
			"ctime" TIMESTAMP default (datetime('now', 'localtime'))
		);
		CREATE TABLE IF NOT EXISTS "config" (
			"id" INTEGER PRIMARY KEY,
			"appId" VARCHAR(50) NOT NULL,
			"userId" VARCHAR(50) NOT NULL,
			"appSecret" VARCHAR(255) NOT NULL,
			"ctime" TIMESTAMP default (datetime('now', 'localtime'))
		);
		`
	result, err := db.Exec(sql)
	fmt.Println(result)
}
