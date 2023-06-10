const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDb = require("./config/db.js");
const port = process.env.PORT || 5000;

// Connect to Database
connectDb();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Start server
app.listen(port, (err) => {
  if (err) {
    console.log(`${err}`.bgRed);
  }

  console.log(`Server is started on port: ${port}`.bgMagenta);
});
