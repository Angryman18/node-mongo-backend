class CustomError extends Error {
  constructor(message, status) {
    super();
    this.status = status;
    this.message = message
  }
}

const throwError = (message, status) => {
  return new CustomError(message, status);
};

module.exports = { CustomError, throwError };
