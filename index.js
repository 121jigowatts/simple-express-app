const express = require("express");
const app = express();
const port = 3000;

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, access_token"
  );

  // intercept OPTIONS method
  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

app.get("/:id", (req, res) => {
  console.log(`リクエスト受付ました。[id: ${req.params.id}]`);

  setTimeout(function () {
    console.log(`完了しました。[id: ${req.params.id}]`);
    res.json({ id: req.params.id });
  }, 3000);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
