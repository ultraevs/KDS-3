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

// @host kds-3.shmyaks.ru
// @BasePath /
func main() {
	if err := godotenv.Load(); err != nil {
		fmt.Println("no.env ")
	}
	router = gin.Default()
	router.Use(CORSMiddleware())
	// Swagger
	swaggerURL := ginSwagger.URL("https://kds-3.shmyaks.ru/swagger/doc.json")
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler, swaggerURL))

	router.LoadHTMLGlob("templates/*")
	router.GET("/", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{})
	})
	router.POST("/callback", internal.PostCallback)
	router.Run("0.0.0.0:8080")
}

// CORSMiddleware enables CORS for all origins
func CORSMiddleware() gin.HandlerFunc {
	return func(context *gin.Context) {
		context.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		context.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		context.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if context.Request.Method == "OPTIONS" {
			context.AbortWithStatus(http.StatusOK)
			return
		}

		context.Next()
	}
}
