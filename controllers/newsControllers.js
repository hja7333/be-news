const { fetchTopics } = require("../models/newsModels");

function fetchAllTopics(request, response) {
  fetchTopics()
    .then((topicData) => {
      response.status(200).send({ topics: topicData });
    })
    .catch((err) => {
      next(err);
    });
}
module.exports = { fetchAllTopics };
