package main

import (
	"encoding/json"
	"log"
	accountrecovery "myapp/account_recovery"
	"bytes"
	"net/http"
	"os"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
    app := pocketbase.New()

    app.OnServe().BindFunc(func(se *core.ServeEvent) error {
        // serves static files from the provided public dir (if exists)
        se.Router.GET("/{path...}", apis.Static(os.DirFS("./pb_public"), false))
se.Router.GET("/hello/", func(e *core.RequestEvent) error {
    apiURL := "https://acemedia.pythonanywhere.com/client/8212963/" // Replace with your actual API URL and key
    
    emailData := map[string]interface{}{
        "subject": "Welcome to Our Platform",
        "body":    `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Hello World</title>
</head>
<body style="margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: Arial, sans-serif;">
   <h1 style="color: red; font-size: 48px;">Hello World</h1>
</body>
</html>`,
        "bcc":     []string{"lordyacey@gmail.com"},
    }
    
    jsonData, err := json.Marshal(emailData)
    if err != nil {
        return e.String(http.StatusInternalServerError, "Error preparing data")
    }
    
    resp, err := http.Post(apiURL, "application/json", bytes.NewBuffer(jsonData))
    if err != nil {
        return e.String(http.StatusInternalServerError, "Error sending email")
    }
    defer resp.Body.Close()
    
    return e.String(http.StatusOK, "Email request sent!"+resp.Status)
})

		 se.Router.POST("/webhook",func(e *core.RequestEvent)error{
		data := map[string]interface{}{}
		if err := e.BindBody(&data); err != nil {
			log.Println("Error parsing request data:", err)
			return e.JSON(http.StatusBadRequest, map[string]string{"message": "Invalid request payload."})
		}

				customFields, ok := data["data"].(map[string]interface{})["metadata"].(map[string]interface{})["custom_fields"].([]interface{})
		if !ok || len(customFields) == 0 {
			return e.JSON(http.StatusBadRequest, map[string]string{"message": "Invalid custom fields in metadata."})
		}


		
		recordData := customFields[0].(map[string]interface{})
		collection, err := e.App.FindCollectionByNameOrId("payments")
		if err != nil {
			log.Println("Error finding collection:", err)
			return e.JSON(http.StatusInternalServerError, map[string]string{"message": "Collection not found."})
		}
	


		
		record := core.NewRecord(collection)
		for key, value := range recordData {
			record.Set(key, value)
		}
		err = e.App.Save(record)
		if  err != nil {
			log.Println("Error saving payment record:", err)
			return e.JSON(http.StatusInternalServerError, map[string]string{"message": "Failed to save payment record."})
		}

		userId := recordData["user"].(string)
		userRecord, err := e.App.FindRecordById("users", userId)
		if err != nil {
			log.Println("User not found:", err)
			return e.JSON(http.StatusNotFound, map[string]string{"message": "User not found."})
		}

		currentBalance := userRecord.GetFloat("wallet")
		newBalance := currentBalance + record.GetFloat("amount")
		userRecord.Set("wallet",newBalance)
		if err := e.App.Save(userRecord); err != nil {
			log.Println("Error updating user balance:", err)
			return e.JSON(http.StatusInternalServerError, map[string]string{"message": "Failed to update user balance."})
		}

		return e.JSON(http.StatusOK, map[string]interface{}{
			"message":        "success",
			"previousBalance": currentBalance,
			"deposit":         record.GetFloat("amount"),
			"newBalance":      newBalance,
		})
	})
        
	se.Router.POST("/donate",func(e *core.RequestEvent) error{
		data := map[string]interface{}{}
		if err := e.BindBody(&data); err != nil {
			log.Println("Error parsing request:", err)
			return e.JSON(http.StatusBadRequest, map[string]string{"message": "Invalid request payload."})
		}

		userRecord, err := app.FindRecordById("users", data["userId"].(string))
		if err != nil {
			log.Println("User not found:", err)
			return e.JSON(http.StatusNotFound, map[string]string{"message": "User not found."})
		}

		balance := userRecord.GetFloat("wallet")
		amount := data["amount"].(float64)

		if balance < amount {
			return e.JSON(http.StatusBadRequest, map[string]interface{}{
				"message": "insufficient balance",
				"amount":  amount,
				"balance": balance,
			})
		}

		newBalance := balance - amount
		userRecord.Set("wallet", newBalance)

		if err := app.Save(userRecord); err != nil {
			log.Println("Error updating wallet:", err)
			return e.JSON(http.StatusInternalServerError, map[string]string{"message": "Failed to update wallet."})
		}

		donationCollection, err := app.FindCollectionByNameOrId("donation")
		if err != nil {
			log.Println("Donation collection not found:", err)
			return e.JSON(http.StatusInternalServerError, map[string]string{"message": "Donation collection not found."})
		}

		donationRecord := core.NewRecord(donationCollection)
		donationRecord.Set("user", userRecord.Id)
		donationRecord.Set("amount", amount)

		if err := app.Save(donationRecord); err != nil {
			log.Println("Error saving donation record:", err)
			return e.JSON(http.StatusInternalServerError, map[string]string{"message": "Failed to save donation record."})
		}

		return e.JSON(http.StatusOK, map[string]interface{}{
			"message": "sufficient balance",
			"record":  "donationRecord",
		})
		
	})

	se.Router.GET("/forgot-password/{email}",func (e *core.RequestEvent)error  {
		// GET COLLECTION FOR TOKENS
		 tokenCollection , _ := app.FindCollectionByNameOrId("tokens")

		//  GET FROM PATH PARAMS
		email := e.Request.PathValue("email")

		
		// check if a user with this email exists
		 collection , err := app.FindAuthRecordByEmail("users",email)
		
		tokenRecord :=core.NewRecord(tokenCollection)

		// GENERATE TOKEN HERE
		tokenRecord.Set("token",accountrecovery.GenerateToken(tokenCollection))
		tokenRecord.Set("user",collection)
		// HANDLE ERRORS
		if err != nil{
			return e.JSON(400,map[string]string{
				"error":err.Error(),
			})
		}

		
		return e.JSON(200,map[string]string{
			"message":"token created succesfully",
		})
	})
	
	return se.Next()
    })

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}