# aybee & backend

This is a backend project
- [model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

<!-- npm init (got package.json ) -->
<!-- added readme.md -->
<!-- added public/temp/.gitkeep -->
<!-- added .gitignore(content of file from .gitignore generator  for node) -->
<!-- added .env & (.env.sample for push) -->

<!-- added src -->
<!-- added app.js, constants.js,index.js inside src -->
<!-- added directories via mkdir controllers, db, middlewares, models, routes, utils inside src -->

<!-- installed nodemon dev dependency (npm i -D nodemon) for index.js autoreload on save -->
<!-- installed prettier dev dependency (npm i -D prettier) -->
<!-- added .prettierrc & .prettierignore also added content in these files -->

<!-- package.json -->
<!-- added script ("dev": "nodemon src/index.js") -->
<!-- made it modular ("type": "module") -->

<!-- mogodb atlas > account > cluster > user > network acces > connection string -->

<!-- .env file > add PORT > add mongoDb_url -->

<!-- constants.js file in src > add (export const DB_NAME = "videotube";) -->

<!-- npm i mongoose express dotenv -->

<!-- notes for database connection-->
<!-- 1. wrap in try catch or promise -->
<!-- 2. Database is always in another continent -->


<!-- make a connection in src/ index.js -->
<!-- or -->
<!-- make a connction in src/db/index.js and export it but use dotenv -->
<!-- for that npm i dotenv & goto package.json  -->
<!-- and add (-r dotenv/config --experimental-json-modules) in dev script like --> 
<!-- to load directly("dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"") -->

<!-- goto src/app.js-->
<!-- write express app and export it -->
<!-- goto src/index.js-->
<!-- connectDB ehich returns promise  -->
<!-- make a .then & .catch chain & in .then make express app listen and catch app error via app.on -->

<!-- use app.use when middleware or configuration is required -->

<!-- npm i cookie-parser cors -->
<!-- import them in app.js & make configuration -->

<!-- make an asyncHandler wrapper/helper/utility method for connectDB to avoid repetition -->
<!-- make an ApiError class utility for customized errors -->
<!-- make an Apiresponse class utility for response -->

<!--  Middleware in Express  -->
<!-- it is a function that gets executed between  -->
<!-- the request coming in (from the client)  -->
<!-- and the response going out (from the server). -->

<!-- Informational responses (100 – 199) -->
<!-- Successful responses (200 – 299) -->
<!-- Redirection messages (300 – 399) -->
<!-- Client error responses (400 – 499) -->
<!-- Server error responses (500 – 599) -->