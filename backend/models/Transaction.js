const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: Number,
    rounded: Number,
    saved: Number,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
