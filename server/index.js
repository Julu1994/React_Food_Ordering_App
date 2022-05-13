const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.listen(5000, () => console.log("Server is up and running"));


app.use("/admin", require("./Router/router"));

mongoose.connect(
    process.env.MONGODB_SECRET_URL,
    (error) => {
        if (error) return console.error(error);
        console.log("Successfully conncected to mongoDB");
    }
);

app.use("/", require("./Router/router"));  
