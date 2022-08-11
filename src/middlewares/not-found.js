const notFound = (req, res) => {
  res.status(404).json("Route Doesnot Exist");
};

module.exports = notFound;
