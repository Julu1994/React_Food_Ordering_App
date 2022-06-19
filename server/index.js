const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.use("/admin", require("./Router/router"));
app.listen(5000, () => console.log("Server is up and running"));

mongoose.connect(process.env.MONGODB_SECRET_URL, (error) => {
    if (error) return console.error(error);
    console.log("Successfully conncected to mongoDB");
});

app.use("/", require("./Router/router"));
