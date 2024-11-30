const { getData, saveData, getSingleData, updateById } = require("../Model");
const { ALIAS_LENGTH } = require("../Model/constant");

class Url {
  COLLECTION_NAME = "url";

  checkUrl = async function (url) {
    if (url) {
      // check Url in redis
      return true;
    }
    return null;
  };

  generateRandomString = function (length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  createShortUrl = async function (req, res) {
    try {
      let { longUrl, customAlias, topic } = req.body;
      // check the number of limits for the user to create shortUrl

      // check if longUrl is already present in database
      const existingUrl = await this.checkUrl(longUrl);
      if (existingUrl) {
        return res.status(200).json({
          shortUrl: BASE_URL + existingUrl.alias,
          createdAt: existingUrl.createdAt,
        });
      }
      if (!customAlias) {
        // create new random alias
        customAlias = generateRandomString(ALIAS_LENGTH);
      }

      // create entry in database
      const URL = {
        longUrl,
        alias: customAlias,
        userId: req.user.id,
      };
      const savedUrl = await saveData("Article", req.body);

      // store in redis

      return res.status(200).json({
        success: true,
        shortUrl: BASE_URL + customAlias,
        createdAt: savedUrl.createdAt,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  redirectUrl = async function (req, res) {
    try {
      
      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  urlAnalytics = async function (req, res) {
    try {

      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  topicBasedAnalytics = async function (req, res) {
    try {
      
    } catch (error) {
      console.log("error: ", error);
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  overallAllAnalytics = async function (req, res) {
    try {
      
    } catch (error) {
      console.log("error: ", error);
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
}

module.exports.Url = new Url();
