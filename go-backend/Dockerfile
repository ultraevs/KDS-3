FROM golang:1.21.0-bookworm
WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod tidy
RUN go get -u github.com/gin-gonic/gin

COPY cmd/ ./cmd/
COPY internal/ ./internal/
COPY templates/ ./templates/

RUN go build -o ./main ./cmd/app/main.go

CMD [ "./main" ]
