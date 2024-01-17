FROM golang:1.21.0-bookworm
WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod tidy

COPY cmd/ ./cmd/
COPY internal/ ./internal/
COPY templates/ ./templates/
COPY .env .

RUN go get github.com/joho/godotenv
RUN go get -u github.com/gin-gonic/gin
RUN go get -u github.com/go-swagger/go-swagger/cmd/swagger
RUN go install github.com/swaggo/swag/cmd/swag@latest
RUN go get gopkg.in/gomail.v2
RUN swag init -g /cmd/app/main.go
RUN go build -o ./main ./cmd/app/main.go

CMD [ "./main" ]
