package routes

import (


	"github.com/pocketbase/pocketbase/core"
)


// // func GetDonateRoute(se *pocketbase.PocketBase) func(echo.Context) error {
// // 	return func(c echo.Context) error {
// // 		authRecord := c.Get("authRecord")
// // 		if authRecord == nil {
// // 			return c.JSON(http.StatusUnauthorized, map[string]string{"message": "Unauthorized"})
// // 		}

// // 		log.Println("ID:", authRecord.(*models.Record).Id)
// // 		return c.JSON(http.StatusOK, map[string]string{"message": "hello"})
// // 	}
// // }

// // func PostDonateRoute(app *pocketbase.PocketBase) func(echo.Context) error {
// // 	return func(c echo.Context) error {
// // 		data := map[string]interface{}{}
// // 		if err := c.Bind(&data); err != nil {
// // 			log.Println("Error parsing request:", err)
// // 			return c.JSON(http.StatusBadRequest, map[string]string{"message": "Invalid request payload."})
// // 		}

// // 		userRecord, err := app.Dao().FindRecordById("users", data["userId"].(string))
// // 		if err != nil {
// // 			log.Println("User not found:", err)
// // 			return c.JSON(http.StatusNotFound, map[string]string{"message": "User not found."})
// // 		}

// // 		balance := userRecord.GetFloat("wallet")
// // 		amount := data["amount"].(float64)

// // 		if balance < amount {
// // 			return c.JSON(http.StatusBadRequest, map[string]interface{}{
// // 				"message": "insufficient balance",
// // 				"amount":  amount,
// // 				"balance": balance,
// // 			})
// // 		}

// // 		newBalance := balance - amount
// // 		userRecord.Set("wallet", newBalance)

// // 		if err := app.Dao().SaveRecord(userRecord); err != nil {
// // 			log.Println("Error updating wallet:", err)
// // 			return c.JSON(http.StatusInternalServerError, map[string]string{"message": "Failed to update wallet."})
// // 		}

// // 		donationCollection, err := app.Dao().FindCollectionByNameOrId("donation")
// // 		if err != nil {
// // 			log.Println("Donation collection not found:", err)
// // 			return c.JSON(http.StatusInternalServerError, map[string]string{"message": "Donation collection not found."})
// // 		}

// // 		donationRecord := models.NewRecord(donationCollection)
// // 		donationRecord.Set("user", userRecord.Id)
// // 		donationRecord.Set("amount", amount)

// // 		if err := app.Dao().SaveRecord(donationRecord); err != nil {
// // 			log.Println("Error saving donation record:", err)
// // 			return c.JSON(http.StatusInternalServerError, map[string]string{"message": "Failed to save donation record."})
// // 		}

// // 		return c.JSON(http.StatusOK, map[string]interface{}{
// // 			"message": "sufficient balance",
// // 			"record":  donationRecord,
// // 		})
// // 	}
// // }




func WebhookRoute(se *core.ServeEvent)error{
	
	return se.Next()
}
