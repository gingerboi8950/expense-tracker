// routes/expenses.js
const express = require('express');
const router = express.Router();
const Expense = require('./Models/ExpenseModel.js');

// Route to create a new expense
router.post('/add', async (req, res) => {
  const { expenseName, expenseCost } = req.body;

  try {
    const newExpense = new Expense({ ExpenseName, ExpenseCost });
    await newExpense.save();
    res.json(newExpense);
  } catch (err) {
    res.status(400).send('Error saving expense: ' + err.message);
  }
});

// Route to fetch all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).send('Error fetching expenses: ' + err.message);
  }
});

module.exports = router;
