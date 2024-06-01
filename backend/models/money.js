const mongoose = require('mongoose');

const moneySchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    }
});

const Money = mongoose.model('Money', moneySchema);

module.exports = Money;
