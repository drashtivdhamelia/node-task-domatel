const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json()); // for JSON body
app.use(express.urlencoded({ extended: true })); 

app.use("/auth", require("./routes/auth.routes"));
app.use("/posts", require("./routes/post.routes"));

module.exports = app;
