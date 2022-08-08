const slugGenerator = (text) => {
  const slugText = text
    .toLowerCase()
    .replace(/\W+/g, "-")
    .replace(/^[\-]/g, "")
    .replace(/[\-]$/g, "");
  return slugText;
};

module.exports = slugGenerator;
