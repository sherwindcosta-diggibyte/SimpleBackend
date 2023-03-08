const express = require("express");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:4200"
};

//express for the rest api to work
const app = express();

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the React application " });
});