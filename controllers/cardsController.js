const Cards = require("../models/cardModel");

const addCard = (req, res) => {
    const card = new Cards(req.body);
    card.save((err, newCard) => {
        if (err) {
            return res.status(401).json({
                error: "Ошибка сохранения карты в базе данных",
            });
        }
        return res.json(newCard);
    });
};

const getCards = async (req, res) => {
    const cards = await Cards.find({})
    res.json(cards)

};

module.exports = { addCard, getCards };