package controllers

import "github.com/go-redis/redis"

type RedisController struct {
	BaseController
}

var (
	redisDb = redis.NewClusterClient(&redis.ClusterOptions{
		Addrs: []string{"192.168.2.46:8179", "192.168.2.46:8279", "192.168.2.46:8379",
			"192.168.2.46:8479", "192.168.2.46:8579", "192.168.2.46:8679"},
	})
)

func (c *RedisController) Query() {
	str := c.QueryString()["key"]
	keys := redisDb.Keys("*" + str + "*")
	c.SuccessJson(keys.Val())
}

func (c *RedisController) Delete() {
	str := c.QueryString()["key"]
	del := redisDb.Del(str)
	c.SuccessJson(del.Val())
}

func (c *RedisController) Fetch() {
	str := c.QueryString()["key"]
	val := redisDb.Get(str)
	c.SuccessJson(val.Val())
}
