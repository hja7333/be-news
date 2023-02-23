const {
  fetchTopics,
  fetchArticles,
  fetchArticleById,
} = require("../models/newsModels");

function fetchAllTopics(request, response) {
  fetchTopics()
    .then((topicData) => {
      response.status(200).send({ topics: topicData });
    })
    .catch((err) => {
      next(err);
    });
}

function fetchAllArticles(request, response) {
  fetchArticles()
    .then((topicData) => {
      response.status(200).send({ articles: topicData });
    })
    .catch((err) => {
      next(err);
    });
}

function getArticleById(request, response, next) {
  const { article_id } = request.params;
  fetchArticleById(article_id)
    .then((article) => {
      response.status(200).send({ article });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = { fetchAllTopics, fetchAllArticles, getArticleById };
