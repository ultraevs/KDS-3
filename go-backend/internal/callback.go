package internal

import (
	_ "app/docs"
	"fmt"
	"github.com/gin-gonic/gin"
	"gopkg.in/gomail.v2"
	"net/http"
	"os"
	"time"
)

// SuccessResponse represents the successful JSON response
type SuccessResponse struct {
	Message string `json:"message"`
}

type CallbackRequest struct {
	Name    string `form:"name" json:"name" binding:"required"`
	Phone   string `form:"phone" json:"phone" binding:"required"`
	Comment string `form:"comment" json:"comment"`
}

// PostCallback godoc
// @Summary Post Callback
// @Description Post Callback Button
// @Param name formData string true "Name"
// @Param phone formData string true "Phone"
// @Param comment formData string true "Comment"
// @Produce json
// @Tags callback
// @Success 200 {object} SuccessResponse
// @Router /callback [post]
func PostCallback(context *gin.Context) {
	var request CallbackRequest
	if err := context.ShouldBind(&request); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	name := request.Name
	phone := request.Phone
	comment := request.Comment

	err := sendEmail(name, phone, comment)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := SuccessResponse{Message: "Данные успешно отправлены"}
	context.JSON(http.StatusOK, response)
}

func sendEmail(name, phone, comment string) error {
	emailAddress := os.Getenv("EMAIL_ADDRESS")
	emailPassword := os.Getenv("EMAIL_PASSWORD")

	mail := gomail.NewMessage()
	mail.SetHeader("From", emailAddress)
	mail.SetHeader("To", os.Getenv("EMAIL_SUBJECT"))
	mail.SetHeader("Subject", "Новые данные из формы")

	moscowTime := time.Now().UTC().Add(3 * time.Hour)
	timeString := moscowTime.Format("2006-01-02 15:04:05")
	body := fmt.Sprintf("Имя: %s\nТелефон: %s\nКомментарий: %s\nВремя отправки: %s",
		name, phone, comment, timeString)

	mail.SetBody("text/plain", body)
	dialer := gomail.NewDialer("smtp.gmail.com", 587, emailAddress, emailPassword)
	err := dialer.DialAndSend(mail)
	return err
}
