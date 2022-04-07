const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cardRoutes = require("./routes/cardsRouter");
const cookieParser = require("cookie-parser");

dotenv.config();

const server = express();
mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB is connected"))
    .catch(() => console.log("Error"));

server.use(express.json());
server.use(cors());
server.use(cookieParser());

server.use(express.static(path.join(__dirname, 'client/build')));

server.use("/api", cardRoutes);

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


server.listen(process.env.PORT || 8000, () => {
    console.log("server is running");
});