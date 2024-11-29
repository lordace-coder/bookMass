// routerAdd(
//   "POST",
//   "/webhook",
//   async (c) => {
//     try {
//       // Extract and log request data
//       const data = $apis.requestInfo(c).data;

//       // Validate metadata and custom fields
//       const customFields = data?.data?.metadata?.custom_fields;
//       if (!Array.isArray(customFields) || customFields.length === 0) {
//         throw new Error("Invalid custom fields in metadata.");
//       }

//       // Save payment record
//       const collection = $app.dao().findCollectionByNameOrId("payments");
//       const recordData = customFields[0];
//       const record = new Record(collection, recordData);
//       $app.dao().saveRecord(record);

//       // Extract user ID from custom fields or other relevant data
//       const userId = recordData?.user;
//       // Adjust based on your metadata structure
//       if (!userId) {
//         throw new Error("User ID not found in custom fields.");
//       }
//       // Find user and update wallet balance
//       const userCollection = $app.dao().findRecordById("users", userId);
//       // Calculate and update wallet balance
//       const currentBalance = userCollection.get("wallet") || 0;
//       const newBalance = currentBalance + record.get("amount");
//       userCollection.set("wallet", newBalance);
//       $app.dao().saveRecord(userCollection);
//       console.log(currentBalance, record.get("amount"));

//       // Return response
//       return c.json(200, {
//         message: "success",
//         previousBalance: currentBalance,
//         deposit: record.get("wallet"),
//         newBalance,
//       });
//     } catch (error) {
//       console.error("Error processing webhook:", error);
//       return c.json(500, {
//         message: "Webhook processing failed.",
//         error: error.message,
//       });
//     }
//   }
//   /* optional middlewares */
// );

// routerAdd("GET", "/donate", async (c) => {
//   const requestInfo = $apis.requestInfo(c).authRecord;
//   try {
//     console.log("id", requestInfo?.getId());
//   } catch (error) {
//     console.log(error);
//   }
//   return c.json(404, {
//     message: "hello",
//   });
// });
// routerAdd("POST", "/donate", async (c) => {
//   try {
//     const { data } = $apis.requestInfo(c);

//     const user = $app.dao().findRecordById("users", data.userId);

//     const balance = user.getFloat("wallet");

//     if (balance > data.amount) {
//       //if balance is sufficient
//       // debit user
//       let newBalance = user.getFloat("wallet") - data.amount;
//       user.set("wallet", newBalance);
//       $app.dao().saveRecord(user);
//       // create donation
//       const donation = $app.dao().findCollectionByNameOrId("donation");
//       const record = new Record(donation, {
//         user: user.id,
//         amount: data.amount,
//       });
//       $app.dao().saveRecord(record);
//       // return record so user can create booking
//       console.log("sufficient balance");
//       return c.json(200, {
//         message: "sufficient balance",
//         record: record,
//       });
//     }
//     return c.json(400, {
//       message: "insufficient balance",
//       amt: data.amount,
//       balance: balance,
//     });
//   } catch (error) {
//     console.log("error occured ->" + error);

//     return c.json(400, {
//       message: "error occured ->" + error,
//     });
//   }
// });
