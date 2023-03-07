const {
  fetchTopics,
  fetchArticles,
  fetchArticleById,
  fetchCommentsForArticle,
  addToComments,
  selectUser,
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
      if (!article) {
        return Promise.reject({ status: 404 });
      }
      response.status(200).send({ article });
    })
    .catch((err) => {
      next(err);
    });
}
function getCommentsForArticle(request, response, next) {
  const { article_id } = request.params;
  const commentsPromise = fetchCommentsForArticle(article_id);
  const checkArticle = fetchArticleById(article_id);
  Promise.all([commentsPromise, checkArticle])

    .then((result) => {
      const comments = result[0];
      response.status(200).send({ comments });
    })
    .catch((err) => {
      next(err);
    });
}
function addComments(request, response, next) {
  const { article_id } = request.params;
  const newComment = request.body;

  addToComments(newComment, article_id)
    .then((commentAdded) => {
      response.status(201).send({ commentAdded });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  fetchAllTopics,
  fetchAllArticles,
  getArticleById,
  getCommentsForArticle,
  addComments,
};
