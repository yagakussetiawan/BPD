const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    date: { type: Date, default: Date.now },
    pointsEarned: { type: Number, default: 10 }
});

module.exports = mongoose.model('Transaction', transactionSchema);
