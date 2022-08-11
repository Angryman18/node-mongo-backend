const { CustomError } = require("../helpers/CustomError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json(err);
  }
  return res.status(500).json({ msg: err?.message });
};

module.exports = errorHandler;
