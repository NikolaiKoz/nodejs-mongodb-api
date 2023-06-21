const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;
const version = "v1/";

//middleware
app.use(express.json());
app.use(`/api/${version}`, userRoutes);

//routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a mongoDB"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
