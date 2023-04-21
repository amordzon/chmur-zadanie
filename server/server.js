const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 4000;
app.use(cors());
app.use(express.json());
const Worker = mongoose.model("Worker", {
  name: String,
  department: String,
});

const uri = "mongodb://database:27017/test";

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose.Promise = global.Promise;

  mongoose
    .connect(uri)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("Error connecting to database");
      console.log(error);
    });
};

app.get("/workers", async (req, res) => {
  Worker.find()
    .then((workers) => {
      res.send(workers);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
