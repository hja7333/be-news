const db = require("../db/connection");
// const articles = require("../db/data/test-data/articles");

exports.fetchTopics = () => {
  return db.query(`SELECT * FROM topics;`).then((topics) => {
    return topics.rows;
  });
};
exports.fetchArticles = () => {
  return db
    .query(
      `SELECT 
      articles.author, title, articles.article_id, topic, articles.created_at, articles.votes, article_img_url, 
      COUNT(comments.article_ID)::int AS comment_count FROM articles 
      LEFT JOIN comments ON articles.article_id = comments.article_id 
      GROUP BY articles.article_id
      ORDER BY 
      created_at DESC;`
    )
    .then((articles) => {
      return articles.rows;
    });
};

exports.fetchArticleById = (id) => {
  return db
    .query(
      `SELECT author, title, article_id, body, topic, created_at, votes, article_img_url FROM articles WHERE article_id = $1`,
      [id]
    )
    .then(({ rows: articles }) => {
      if (articles.length === 0) {
        return Promise.reject({
          status: 404,
          message: "no article found",
        });
      } else {
        return articles[0];
      }
    });
};
exports.fetchCommentsForArticle = (id) => {
  return db
    .query(
      `SELECT * FROM comments WHERE article_id = $1 ORDER BY created_at DESC;`,
      [id]
    )
    .then(({ rows: comments }) => {
      return comments;
    });
};
