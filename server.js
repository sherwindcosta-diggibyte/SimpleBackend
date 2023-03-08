const express = require("express");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000"
};

//express for the rest api to work
const app = express();

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  const message="Welcome to the React application ";
  res.json(message);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});