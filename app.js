require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 4009;
const app = express();
const router = require("./router");

app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.send("Welcome to my Api");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
