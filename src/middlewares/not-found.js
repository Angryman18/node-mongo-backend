const notFound = (req, res) => {
  console.log("this is invoked");
  res.status(404).json("Route Doesnot Exist");
};

module.exports = notFound;
