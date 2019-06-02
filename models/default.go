package models

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/mattn/go-sqlite3"
	"reflect"
)

type Config struct {
	Id        int32  `orm:"pk;auto;"`
	AppId     string `orm:"size(50)" json:"appId"`
	UserId    string `orm:"size(50)" json:"userId"`
	AppSecret string `orm:"size(255)" json:"appSecret"`
	Ctime     string `orm:"size(22)" json:"ctime"`
}

type History struct {
	Id     int32  `orm:"pk;auto;" json:"id"`
	Url    string `orm:"size(255)" json:"url"`
	Method string `orm:"size(10);default(POST);" json:"method"`
	Param  string `orm:"type(text)" json:"param"`
	Result string `orm:"type(text)" json:"result"`
	Exec   string `orm:"size(10)" json:"exec"`
	Ctime  string `orm:"size(22)" json:"ctime"`
}

var (
	filename = beego.AppPath + "\\static\\data.db"
)

func init() {
	_ = orm.RegisterDriver("sqlite3", orm.DRSqlite)
	_ = orm.RegisterDataBase("default", "sqlite3", filename)
	orm.RegisterModel(new(Config), new(History))
	_ = orm.RunSyncdb("default", false, true)
}

func (c *Config) Querys() orm.QuerySeter {
	return orm.NewOrm().QueryTable(c)
}

func (c *Config) Delete() (int64, error) {
	num, err := orm.NewOrm().Delete(c)
	if err != nil {
		return 0, err
	}
	return num, err
}

func (c *Config) Insert() (int64, error) {
	return orm.NewOrm().Insert(c)
}

func (c *Config) Update(fields ...string) error {
	_, err := orm.NewOrm().Update(c, fields...)
	if err != nil {
		return err
	}
	return nil
}

func (h *History) Querys() orm.QuerySeter {
	return orm.NewOrm().QueryTable(h)
}

func (h *History) Delete() (int64, error) {
	num, err := orm.NewOrm().Delete(h)
	if err != nil {
		return 0, err
	}
	return num, err
}

func (h *History) Insert() (int64, error) {
	return orm.NewOrm().Insert(h)
}

func (h *History) Update(fields ...string) error {
	_, err := orm.NewOrm().Update(h, fields...)
	if err != nil {
		return err
	}
	return nil
}

func (c *Config) IsEmpty() bool {
	return reflect.DeepEqual(c, Config{})
}

func (h *History) IsEmpty() bool {
	return reflect.DeepEqual(h, History{})
}
