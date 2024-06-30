const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
require("dotenv").config();

const db = require("./models");
console.log("Running");
const userRouter = require("./routes/Users");
app.use("/auth", userRouter);

db.sequelize.sync().then(() =>{
    app.listen(process.env.PORT || 3001, () => {
        console.log("Serever run on port 3001");
    });
});

