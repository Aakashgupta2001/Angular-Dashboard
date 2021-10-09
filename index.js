const express = require("express");
const app = express();
const mongo = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const user = require("./app/routes/user.routes");

app.use(cors());

//connecting mongoose
mongo.connect(process.env.MONGO_CONNECT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("connected to mongo");
});

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/user", user);

//starting server
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on port", port);
});
