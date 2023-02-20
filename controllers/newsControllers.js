const { fetchTopics } = require("../models/newsModels");

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
module.exports = { fetchAllTopics };
