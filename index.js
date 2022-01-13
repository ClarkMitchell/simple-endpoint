import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

app.all("*", (req, res) => {
  setTimeout(() => {
    console.log({ url: req.originalUrl, body: req.body, query: req.query });
    res.send(req.body);
  }, req.query?.timeout || 0);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
