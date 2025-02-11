import express from "express";
import Expense from "../Models/expenseModel.js";
import authMiddleware from "../Middleware/auth.js";
import axios from "axios";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const expenses = await Expense.find({ userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, cost } = req.body;
    const userId = req.user.id;

    const existingExpense = await Expense.findOneAndUpdate(
      { userId, name },
      { cost },
      { new: true, upsert: true }
    );

    res.json(existingExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.json({ message: "Expense deleted successfully", deletedExpense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
