const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

exports.mongoDB = () => {
  mongoose
    .connect("mongodb+srv://kmjstj3:zzx13579@@boilerplate.iejaz2p.mongodb.net/")
    .then(() => console.log("connected"))
    .catch(() => console.log("mongodb connection failed"));
};

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log("Example app listening on port"));
