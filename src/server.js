const express = require("express");
const connect = require("./connect/connect");
const PostRoute = require("./routes/PostRoute");
const logger = require("./logger");
const app = express();

app.use(express.json());
app.use(logger);
app.use("/", PostRoute);

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
