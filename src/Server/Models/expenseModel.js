import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const expenseSchema = new Schema(
  {
    userId: String, // foreign key that links to users
    name: String,
    cost: Number,
  },
  { collection: "expenses" }
);

const Expense = mongoose.model("Expense", expenseSchema); // Schema -> Model

export default Expense;
