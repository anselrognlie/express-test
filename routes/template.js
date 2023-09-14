// create a route template
const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.json());

// define routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/api", (req, res) => {
  res.json("Hello World!");
});

// export router
module.exports = router;
