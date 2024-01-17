package main

import (
	_ "app/docs"
	"app/internal"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"net/http"
)

var router *gin.Engine

// @title KDS-3 Service API
// @version 1.0
// @description KDS-3 API

// @host localhost:8080
// @BasePath /
func main() {
	if err := godotenv.Load(); err != nil {
		fmt.Println("no.env ")
	}
	router = gin.Default()
	// Swagger
	swaggerURL := ginSwagger.URL("http://localhost:8080/swagger/doc.json")
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler, swaggerURL))

	router.LoadHTMLGlob("templates/*")
	router.GET("/", func(context *gin.Context) {
		context.HTML(http.StatusOK, "index.html", gin.H{})
	})
	router.POST("/callback", internal.PostCallback)
	router.Run("0.0.0.0:8080")
}
