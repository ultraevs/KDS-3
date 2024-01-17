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
RUN go get gopkg.in/gomail.v2
RUN go build -o ./main ./cmd/app/main.go

CMD [ "./main" ]
