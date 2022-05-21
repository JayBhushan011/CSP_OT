const express = require("express");
const router = express.Router();

const { getMessageFromFrontend,sendMessageToFrontEnd, sendPK } = require("../controllers/main");


router.route("/").post(getMessageFromFrontend);

router.route("/getMessage").get(sendMessageToFrontEnd);


router.route("/getPK").get(sendPK);

module.exports = router;