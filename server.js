const express = require("express");
// const fetch = require("node-fetch");
// import express from "express";
// import fetch from "node-fetch";
const app = express();
const bodyParser = require("body-parser");
const port = 3001;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   fetch("https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth")
//     .then((response) => {
//       console.log(response);
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//     });
// });
app.set("view engine", "ejs");
app.get("/layout", (req, res) => {
  res.render("layout");
});

app.listen(port, (req, res) => {
  console.log("oke");
});
