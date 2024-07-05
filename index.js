const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
require("dotenv").config();

const db = require("./models");
console.log("Running...");

const userRouter = require("./routes/Users.js");
app.use("/auth", userRouter);

const complaintRouter = require("./routes/Complaints.js");
app.use("/complaints", complaintRouter);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log("Server running on port 3001");
  });
});
