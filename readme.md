This is a Digital cow server website backend where a user can create his account , sell a cow or buy a cow . The api details given into the bellow:-->

error message type:
{
"success": false,
"message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }",
"errorMessages": [
{
"path": "",
"message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }"
}
],
"stack": "MongoServerError: E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }\n at H:\\next-level-development\\university-management-auth-service\\node_modules\\mongodb\\src\\operations\\insert.ts:85:25\n at H:\\next-level-development\\university-management-auth-service\\node_modules\\mongodb\\src\\cmap\\connection_pool.ts:574:11\n at H:\\next-level-development\\university-writeOrBuffer (node:internal/streams/writable:391:12)"
}

<!-- users  -->

\*\*\* https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/auth/signup --> create a new user :
example :

{
"password":"abrakadabra",
"role": "buyer"|"seller",
"name":{
"firstName": "Mr. Babull"
"lastName": "Bro"
},
"phoneNumber":"01711111111",
"address": "Chattogram",
"budget":70000,
"income":0
}

\*\*\* https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/users/--> get all user
\*\*\* https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/users?searchTerm=--> get all user
\*\*\* https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/users/:id--> get single
user
\*\*\* https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/users/:id-->Delete a user
\*\*\* https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/users/:id-->update a user

<!-- Cows -->

https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/cows (POST)
https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/cows (GET)
https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/cows/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/cows/6177a5b87d32123f08d2f5d4 (PATCH)
https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/cows/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

Pagination and Filtering routes of Cows
https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/cows?pag=1&limit=10
https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc
https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/cows?location=Chattogram
https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/cows?searchTerm=Cha

<!-- order -->

https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/orders (POST)

{
"cow":"651667159ed4d29e7295299d",
"buyer":"651665aa9ed4d29e72952991"
}

https://cow-server-dt2nndt5s-rafin8990.vercel.app/api/v1/orders (GET)
