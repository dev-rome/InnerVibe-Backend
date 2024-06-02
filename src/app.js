const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const entryRoutes = require("./routes/entryRoutes");
const authRoutes = require("./routes/authRoutes");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});

app.use("/api/auth", authRoutes);
app.use("/api/entry", entryRoutes);

module.exports = app;