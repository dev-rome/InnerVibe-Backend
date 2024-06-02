const express = require("express");
const Entry = require("../models/entryModel");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
    try {
        const userEntries = await Entry.find({ user: req.user.id });
        res.json(userEntries);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});

router.post("/", authMiddleware, async (req, res) => {
    const { entry, title } = req.body;

    try {
        const newEntry = new Entry({ user: req.user.id, entry, title });
        const savedEntry = await newEntry.save();
        res.json(savedEntry);
        res.status(201).json({ message: "Mood recorded successfully" });
    } catch (err) {
        res.status(500).json({ err: "Failed to record entry" });
    }
});

module.exports = router;