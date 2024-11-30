const mongoose = require("mongoose");

const Article_Schema = new mongoose.Schema({
  isActive: { type: Boolean, default: true },
  alias: { type: String, required: [true, "Alias is required"] },
  // shortUrl: { type: String, required: [true, "Short Url is required"] },
  longUrl: { type: String, required: [true, "Url is required"] },
  userId: { type: mongoose.Schema.Types.ObjectId, required: [true, "User Id is required"] },
  modifiedAt: { type: Date, default: new Date() },
  createdAt: { type: Date, default: new Date() },
});

const Article = mongoose.model("Article", Article_Schema);

module.exports = Article;
