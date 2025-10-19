const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    budget: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        match: /^#[0-9A-Fa-f]{6}$/,  // Validates hex color format
        uppercase: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Budget', budgetSchema);