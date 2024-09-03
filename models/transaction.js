const mongoose = require('mongoose');

const TransactionSchema =  mongoose.Schema({
  type: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  description: String,
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
