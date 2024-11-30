const models = {
  User: require("./Schema/User"),
  Url: require("./Schema/Url"),
};
module.exports = {
  models,
  PORT: process.env.PORT ? process.env.PORT : 4200,
  DB_URI: process.env.DB_URI ? process.env.DB_URI : "",
  URL_LIMIT_DAYS: process.env.URL_LIMIT_DAYS ? process.env.URL_LIMIT_DAYS : 10,
  BASE_URL: process.env.BASE_URL ? process.env.BASE_URL : "",
  ALIAS_LENGTH: process.env.ALIAS_LENGTH ? process.env.ALIAS_LENGTH : 12,
};
