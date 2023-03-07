function handlePSQL400s(error, request, response, next) {
  if (
    error.code === "22P02" ||
    error.code === "23502" ||
    error.code === "23503"
  ) {
    return response.status(400).send({ msg: "Bad request" });
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
function handle500Statuses(error, request, response, next) {
  console.log(error, `<--------500 errors`);
  response.status(500).send({ msg: "sorry we made a server error" });
}
module.exports = { handlePSQL400s, handle500Statuses, handleCustomErrors };
