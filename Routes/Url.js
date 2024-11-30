const express = require("express");
const { Url } = require("../Controller/Url");
const Auth = require("../Controller/Auth");
const router = express.Router();

router.post("/shorten", Auth.verifyRequest, Url.createShortUrl);
router.get("/shorten/:_alias", Auth.verifyRequest, Url.redirectUrl);
router.get("/analytics/:_alias", Auth.verifyRequest, Url.urlAnalytics);
router.get("/analytics/topic/:_topic", Auth.verifyRequest, Url.topicBasedAnalytics);
router.get("/analytics/overall", Auth.verifyRequest, Url.overallAllAnalytics);

module.exports = router;
