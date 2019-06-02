package controllers

import (
	"encoding/json"
	"time"
	"web/models"
)

type ConfigController struct {
	BaseController
}

func (c *ConfigController) Fetch() {
	var config models.Config
	_, err := config.Querys().Limit(1).All(&config)
	if err != nil {
		c.Fail(err.Error())
		return
	}
	c.Success(config)
}

func (c *ConfigController) Save() {
	var config models.Config
	i, err := config.Querys().Filter("Id", "1").All(&config)
	if err != nil {
		c.Fail(err.Error())
		return
	}
	qy := c.QueryString()
	j, _ := json.Marshal(qy)
	_ = json.Unmarshal([]byte(j), &config)
	config.Ctime = time.Now().Format("2006-01-02 15:04:05")
	if i == 0 {
		num, _ := config.Insert()
		c.Success(num)
	} else {
		config.Id = 1
		_ = config.Update()
		c.Success(1)
	}
}
