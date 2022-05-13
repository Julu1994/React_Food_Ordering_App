const mongoose = require("mongoose");

const mySchema = new mongoose.Schema(
    {
        key: {
            type: String,
        },
        img: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },

    },
    {
        timestamps: true,
    }
);

const Schema = mongoose.model("schema", mySchema);

module.exports = Schema;