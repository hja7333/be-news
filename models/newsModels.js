const db = require("../db/connection");

function fetchTopics() {
  return db.query(`SELECT * FROM topics;`).then((topics) => {
    return topics.rows;
  });
}
function fetchArticles() {
  return db
    .query(
      `SELECT 
      articles.author, title, articles.article_id, topic, articles.created_at, articles.votes, article_img_url, 
      COUNT(COMMENTS.COMMENT_ID) AS comment_count FROM articles 
      LEFT JOIN comments ON articles.article_id = comments.article_id 
      GROUP BY articles.author, title, articles.article_id, topic, articles.created_at, articles.votes, article_img_url
      ORDER BY 
      created_at DESC;`
    )
    .then((articles) => {
      return articles.rows;
    });
}

module.exports = { fetchTopics, fetchArticles };
