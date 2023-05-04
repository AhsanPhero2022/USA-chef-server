const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());
const allChef = require("./chefData.json");

app.get("/", (req, res) => {
  res.json({ messa: "hello server ruuning" });
});

app.get("/singleData/:id", (req, res) => {
  const id = req.params.id;
  const singleData = allChef.find((n) => n.id == id);
  res.send(singleData);
});

app.get("/allData", (req, res) => {
  res.send(allChef);
});
app.listen(5000, () => {
  console.log("server started");
});
