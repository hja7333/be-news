const { fetchTopics, fetchArticles } = require("../models/newsModels");

function fetchAllTopics(request, response) {
  fetchTopics()
    .then((data) => {
      console.log(data);
      response.status(200).send({ topics: data });
    })
    .catch((err) => {
      next(err);
    });
}

function fetchAllArticles(request, response) {
  fetchArticles()
    .then((data) => {
      console.log(data);
      response.status(200).send({ articles: data });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = { fetchAllTopics, fetchAllArticles };
