require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.get("/twitter", (req, res) => {
  res.send("hitesh32@gmail.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port `);
});
