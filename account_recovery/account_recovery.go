package accountrecovery

import (
	"math/rand"
	"strconv"
	"time"

	"github.com/pocketbase/pocketbase/core"
)

// generate forgot password token
// validate token
// change password


func generator()string{
	rand.Seed(time.Now().UnixNano())
	randomNumber := rand.Intn(90000) + 1000

	return strconv.Itoa(randomNumber)
}
func GenerateToken(tokenCollection *core.Collection)string {
	var token string
	keepGoing := true

	for keepGoing{
	// generate token
	token = generator()


	// check if token exists
	


	}

		return token
}