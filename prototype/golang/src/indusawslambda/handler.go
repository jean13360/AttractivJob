package main

import (
	"log"

	"github.com/aws/aws-lambda-go/events"
)

type MyEvent struct {
	Name string `json:"name"`
}

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// stdout and stderr are sent to AWS CloudWatch Logs
	log.Printf("Processing Lambda request %s\n", request.RequestContext.RequestID)

	return events.APIGatewayProxyResponse{
		Body:       "Hello Bobinou",
		StatusCode: 200,
	}, nil
}
