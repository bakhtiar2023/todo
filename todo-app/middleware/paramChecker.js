const { paramsError } = require('../global/response.message');
const { badRequest } = require('../global/response.status');

const paramsChecker = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(parseFloat(id))) {
    res.status(badRequest).send(paramsError);
  } else {
    next();
  }
};

module.exports = paramsChecker;
