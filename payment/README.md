Task: Create following APIs that will mimic a payment gateway basic behavior
1. Initiate payment - User requests to pay for a an existing product. API should take product id as input (you can put dummy data in database for products with pricing). It should return a transaction id (a uuid of transaction) which will be used in other APIs if user wants to continue with transaction. Make sure to add necessary validations
2. Send verification code - Transaction id should be taken as input. Use any mailing service, direct smtp or a free sendgrid account. Generate and send a 6 digit code to the user's mail id.
3. Verify code - User inputs the code which shall be the input parameter of the api, if correct proceed with the transaction and successfully complete the purchase
