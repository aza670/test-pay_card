const express = require("express");
const {addCard, getCards} = require("../controllers/cardsController");

const router = express.Router();

router.get("/get-cards", getCards);
router.post("/add-card", addCard);

module.exports = router;