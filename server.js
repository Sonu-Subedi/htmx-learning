const express = require("express");
const path = require("path");

const router = require("./components_route/route");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));
app.use("/", router);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
