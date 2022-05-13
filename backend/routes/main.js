const express = require("express");
const router = express.Router();

const { getMessage } = require("../controllers/main");


router.route("/").post(getMessage);

module.exports = router;