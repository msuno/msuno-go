package main

import (
	"database/sql"
	"github.com/astaxie/beego"
	_ "github.com/mattn/go-sqlite3"
	_ "web/routers"
)

func main() {
	db, err := sql.Open("sqlite3","./data.db")
	if err != nil {
		panic(err.Error())
	}
	sql_table := `
		CREATE TABLE IF NOT EXISTS "userinfo" (
		   "uid" INTEGER PRIMARY KEY AUTOINCREMENT,
		   "username" VARCHAR(64) NULL,
		   "departname" VARCHAR(64) NULL,
		   "created" TIMESTAMP default (datetime('now', 'localtime'))  
		);`
	db.Exec(sql_table)
	beego.Run()
}
