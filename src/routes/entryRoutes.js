const express = require("express");
const Mood = require("../models/entryModel");
const router = express.Router();

router.post("/", async (req, res) => {
    const { entry, title } = req.body;

    try {
        const newEntry = new Mood({ entry, title });
        await newEntry.save();
        res.status(201).json({ message: "Mood recorded successfully" });
    } catch (err) {
        res.status(500).json({ err: "Failed to record entry" });
    }
});

module.exports = router;