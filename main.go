package main

import (
	"database/sql"
	"fmt"
	"github.com/astaxie/beego"
	_ "web/models"
	_ "web/routers"
)

func main() {
	//initDB()
	beego.BConfig.WebConfig.TemplateLeft = "[["
	beego.BConfig.WebConfig.TemplateRight = "]]"
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
