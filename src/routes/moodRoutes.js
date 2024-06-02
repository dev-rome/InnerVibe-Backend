const express = require("express");
const Mood = require("../models/moodModel");
const router = express.router();

router.post("/", async (req, res) => {
    const { mood } = req.body;

    try {
        const newMood = new Mood({ mood });
        await newMood.save();
        res.status(201).json({ message: "Mood recorded successfully" });
    } catch (err) {
        res.status(500).json({ err: "Failed to record mood" });
    }
});

module.exports() = router;