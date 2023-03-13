const express = require("express");
const cors = require("cors");
const app = express();
const {
  fetchAllTopics,
  fetchAllArticles,
  getArticleById,
  getCommentsForArticle,
  addComments,
} = require("./controllers/newsControllers");

const {
  handle500Statuses,
  handlePSQL400s,
  handleCustomErrors,
} = require("./controllers/errorControllers");
app.use(cors());
app.use(express.json());
app.get("/api/topics", fetchAllTopics);
app.get("/api/articles", fetchAllArticles);
app.get("/api/articles/:article_id", getArticleById);
app.get("/api/articles/:article_id/comments", getCommentsForArticle);
app.post("/api/articles/:article_id/comments", addComments);
app.all("/*", (request, response) => {
  response.status(404).send({ msg: "not found" });
});
app.use(handleCustomErrors);
app.use(handlePSQL400s);

app.use(handle500Statuses);
module.exports = app;
