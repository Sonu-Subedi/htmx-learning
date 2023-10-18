const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const ContentWrapperController = require("../src/controller/controller");
app.use(express.json());

router.get("/navbar", (req, res) => {
  const filePath = path.join(__dirname, "/../src/views/navbar.html");
  res.sendFile(filePath);
});

router.get("/inputheader", (req, res) => {
  const filePath = path.join(__dirname, "/../src/views/inputheader.ejs");
  res.sendFile(filePath);
});

router.get("/outputheader", (req, res) => {
  const filePath = path.join(__dirname, "/../src/views/outputheader.html");
  res.sendFile(filePath);
});

router.get("/inputEditor", (req, res) => {
  const filePath = path.join(__dirname, "/../src/views/inputEditor.ejs");
  res.sendFile(filePath);
});

router.post("/validate", (req, res) => {
  const test = req.body;
  console.log(test);
  res.send("hello");
  // try {
  //   JSON.parse(code);

  //   res.status(200).send("<p style='color: green;'>Valid JSON</p>");
  // } catch (error) {
  //   res.status(400).send("<p style='color: red;'>Invalid JSON</p>");
  // }
});

router.get("/contentWrapper", ContentWrapperController);
router.get("/footer", (req, res) => {
  const filePath = path.join(__dirname, "/../src/views/footer.ejs");
  res.sendFile(filePath);
});

module.exports = router;
