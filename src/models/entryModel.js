const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    entry: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    title: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

module.exports = mongoose.model("Entry", entrySchema);