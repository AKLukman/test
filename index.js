const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const user = require("./routes/v1/route.user");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/user", user);

app.get("/", (req, res) => {
  res.send("Hello, I'm back");
});

app.all("*", (req, res) => {
  res.send("Route not found");
});

app.listen(port, () => {
  console.log("Listenign on port", port);
});
