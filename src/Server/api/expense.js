import express from "express";
import Expense from "../Models/expenseModel.js";
import authMiddleware from "../Middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const expenses = await Expense.find({ userId });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post("/", authMiddleware, async () => {
    try {
        const { name, cost } = req.body;
        const userId = req.user.id;
        const newExpense = new Expense({ userId, name, cost });
        await newExpense.save();

        res.json(newExpense);
    } catch(error) {
        res.status(500).jso({ message: error.message });
    }
});

export default router;