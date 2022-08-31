const app = require("express")();

app.get("/", (req, res, nex) => {
  res.send("the app is working now");
});

app.listen(3001, () => {
  console.log("the app is listening to the port 3001");
});
