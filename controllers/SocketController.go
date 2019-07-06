package controllers

type SocketController struct {
	BaseController
}

func (c *SocketController) Get() {
	c.TplName = "socket.html"
}
