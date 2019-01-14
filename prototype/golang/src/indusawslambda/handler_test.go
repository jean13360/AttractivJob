package main_test

import ( 
	"testing"

	"github.com/aws/aws-lambda-go/events"
	"github.com/stretchr/testify/assert"

	"indusawslambda"
)

func TestHandler(t *testing.T) {
	request := events.APIGatewayProxyRequest{Body: "Paul"}
	response, _ := main.HandleRequest(request)
	assert.Equal(t, "Hello Bobinou", response.Body)
}
