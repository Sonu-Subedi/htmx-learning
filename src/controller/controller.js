const path = require("path");
const { contentData } = require("../constant");

const ContentWrapper = (req, res) => {
  const templatePath = path.join(
    __dirname,
    "..",
    "views",
    "contentWrapper.ejs"
  );

  res.render(templatePath, {
    contentData,
  });
};

module.exports = ContentWrapper;
