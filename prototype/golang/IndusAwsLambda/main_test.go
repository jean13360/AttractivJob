package main_test

import (
	"testing"
	"github.com/stretchr/testify/assert"
	"github.com/aws/aws-lambda-go/events"
	"test1"
)
 
func TestHandler(t *testing.T) {
	request:= events.APIGatewayProxyRequest{Body: "Paul"}
	response, _ := main.HandleRequest(request)
	assert.Equal(t, "Hello Bobinou", response.Body)
}
