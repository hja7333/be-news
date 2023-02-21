function error500(error, request, response, next) {
  response.status(500).send({ msg: "error 500" });
}
module.exports = error500;
