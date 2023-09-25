const express = require("express");
const format = require("date-format");

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "rishabhguptaofficial",
    followers: 294,
    follows: 307,
    date: Date.now(),
  };

  res.json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "rishabhguptafbpage",
    followers: 69,
    follows: 70,
    date: format.asString("dd-MM - hh:mm:ss", new Date()),
  };

  res.json(instaSocial);
});

app.get("/api/v1/:token", (req, res) => {
  // token is just a identifier, we can name it anything like id, courseId, rollNumber etc
  res.status(200).json({ path: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
