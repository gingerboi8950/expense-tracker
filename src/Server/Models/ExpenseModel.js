// models/Expense.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({ 
    cookieID: {type: Number, required: true},
    expenseName: { type: String, required: true },
    expenseCost: { type: Number, required: true }
    // date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', expenseSchema);



