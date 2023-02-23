const express = require("express");
const app = express();
const {
  fetchAllTopics,
  fetchAllArticles,
  getArticleById,
} = require("../be-nc-news/controllers/newsControllers");

const {
  handle500Statuses,
  handlePSQL400s,
  handleCustomErrors,
} = require("../be-nc-news/controllers/errorControllers");

app.get("/api/topics", fetchAllTopics);
app.get("/api/articles", fetchAllArticles);
app.get("/api/articles/:article_id", getArticleById);
app.use(handlePSQL400s);
app.use(handleCustomErrors);
app.use(handle500Statuses);

module.exports = app;
