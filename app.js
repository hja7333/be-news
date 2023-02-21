const express = require("express");
const {
  fetchAllTopics,
  fetchAllArticles,
} = require("../be-nc-news/controllers/newsControllers");
const error500 = require("../be-nc-news/controllers/errorControllers");
const app = express();

app.get("/api/topics", fetchAllTopics);
app.get("/api/articles", fetchAllArticles);

app.use(error500);
module.exports = app;
