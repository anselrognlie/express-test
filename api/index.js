// create express server
const express = require("express");
// import express from "express";
// const morganMiddleware = require("../middlewares/morgan");
const app = express();
// const port = 3000;

// serve static files
// app.use(express.static("public"));
app.use(express.json());
// app.use(morganMiddleware);

// define routes
app.use("/api", require("../routes/template"));

// start server
// app.listen(port, () => console.log(`Server listening on port ${port}!`));


module.exports = app;