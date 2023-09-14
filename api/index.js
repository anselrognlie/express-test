// create express server
const express = require("express");
// import express from "express";
const router = express.Router();

router.use(express.json());

// define routes
router.use("/api", require("../routes/template"));

module.exports = router;