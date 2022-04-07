const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
    {
        cardName: {
            type: String,
            required: true,
            trim: true,
        },
        cardNumber: {
            type: String,
            required: true,
            trim: true,
        },
        cvv: {
            type: String,
            required: true,
            trim: true,
        },
        month: {
            type: String,
            required: true,
            trim: true,
        },
        year: {
            type: String,
            required: true,
            trim: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("cards", cardSchema);