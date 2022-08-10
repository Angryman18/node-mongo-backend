const express = require("express");
const connect = require("./connect/connect");
const PostRoute = require("./routes/PostRoute");
const loggerFunc = require("./logger");
const app = express();
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");

app.use(express.json());
app.use(loggerFunc);
app.use("/", PostRoute);
app.use(notFound);
app.use(errorHandler);

(async () => {
  try {
    await connect();
    console.log("Connected with MongoDB");
    runServer();
  } catch (err) {
    console.log(err);
  }
})();

const runServer = () => {
  app.listen(5000, () => {
    console.log("Server is running on 5000");
  });
};
