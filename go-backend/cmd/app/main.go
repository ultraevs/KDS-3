package main

import (
	"app/internal"
	"github.com/gin-gonic/gin"
	"net/http"
)

var router *gin.Engine

func main() {
	router = gin.Default()
	router.LoadHTMLGlob("templates/*")
	router.GET("/", func(context *gin.Context) {
		context.HTML(http.StatusOK, "index.html", gin.H{})
	})
	router.POST("/callback", internal.PostCallback)
	router.Run("0.0.0.0:8080")
}
