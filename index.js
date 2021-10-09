const express = require("express");
const app = express();
const mongo = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on port", port);
});
