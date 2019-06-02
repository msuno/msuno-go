package controllers

import (
	"fmt"
	"math"
	"web/models"
)

type HistoryController struct {
	BaseController
}

func (h *HistoryController) Query() {
	page, _ := h.GetInt("page", 1)
	pageSize, _ := h.GetInt("pageSize", 10)
	start := (page - 1) * pageSize
	qy := &models.History{}
	count, _ := qy.Querys().Count()
	fmt.Println(count)
	var history []models.History
	_, err := qy.Querys().OrderBy("-ctime").Limit(pageSize, start).All(&history)
	if err != nil {
		h.Fail(err.Error())
		return
	}
	res := make(map[string]interface{})
	res["page"] = page
	res["pageSize"] = pageSize
	res["count"] = count
	res["data"] = history
	res["totalPage"] = math.Ceil(float64(count) / float64(pageSize))
	h.Success(res)
}

func (h *HistoryController) Save() {

}

func (h *HistoryController) Update() {

}

func (h *HistoryController) Delete() {
	id, _ := h.GetInt("id")
	his := &models.History{}
	his.Id = int32(id)
	num, err := his.Delete()
	if err != nil {
		h.Fail(err.Error())
		return
	}
	h.Success(num)
}
