const express = require("express");
const database = require("./config/database");
const user_router = require("./routers/user.router");
const cookie = require("cookie-parser");
            



const app = express();

app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/Api', user_router);



app.listen(8081, (err) => {
database();
  if (!err) {
    console.log("server start: http://localhost:8000");
  }
});
