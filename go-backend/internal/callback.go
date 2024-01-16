package internal

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"gopkg.in/gomail.v2"
	"net/http"
	"time"
)

func PostCallback(context *gin.Context) {
	name := context.PostForm("name")
	phone := context.PostForm("phone")
	comment := context.PostForm("comment")
	err := sendEmail(name, phone, comment)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Данные успешно отправлены"})
}

func sendEmail(name, phone, comment string) error {
	emailAddress := "smyakneksbimisis@gmail.com"
	emailPassword := "bzzz xver frwk zhao"

	// Создаем сообщение
	mail := gomail.NewMessage()
	mail.SetHeader("From", emailAddress)
	mail.SetHeader("To", "evstabpro@gmail.com")
	mail.SetHeader("Subject", "Новые данные из формы")

	moscowTime := time.Now().UTC().Add(3 * time.Hour)
	timeString := moscowTime.Format("2006-01-02 15:04:05")
	body := fmt.Sprintf("Имя: %s\nТелефон: %s\nКомментарий: %s\nВремя отправки: %s",
		name, phone, comment, timeString)

	mail.SetBody("text/plain", body)
	dialer := gomail.NewDialer("smtp.gmail.com", 587, emailAddress, emailPassword)
	fmt.Println(dialer.DialAndSend(mail))
	err := dialer.DialAndSend(mail)
	return err
}
