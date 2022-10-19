const express = require("express");
const router = express.Router();

const { getDate } = require("../controllers/datecheck");

router.get("/getDate", getDate);

module.exports = router;
