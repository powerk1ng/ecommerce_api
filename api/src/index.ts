import express from "express";

const port = process.env.PORT;
const app = express();

console.log(port);

app.get("/", (req, res) => {
  res.send("hello world 123");
});

app.listen(port, () => {
  console.log("example listening to port " + port);
});
