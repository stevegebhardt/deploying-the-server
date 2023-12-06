const express = require("express");
const cors = require("cors");

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5001;

router.get("/", cors(), (req, res) => {
  res.json({ message: "Hello Render!" });
});

app.use("/", router);

app.listen(PORT, () => {
  console.log("Good morning Seattle, I'm listening.");
});

module.exports = app;
