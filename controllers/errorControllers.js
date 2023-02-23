function handle500Statuses(error, request, response, next) {
  console.log(error);
  response.status(500).send({ msg: "sorry we made a server error" });
}
function handlePSQL400s(error, request, response, next) {
  if (error.code === "22P02") {
    response.status(400).send({ msg: "Bad request" });
  } else {
    next(error);
  }
}

function handleCustomErrors(error, request, response, next) {
  if (error.message === "no article found") {
    response.status(404).send({ msg: "not found" });
  } else {
    next(error);
  }
}

module.exports = { handle500Statuses, handlePSQL400s, handleCustomErrors };
