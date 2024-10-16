import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

// Components
import Title from "./Components/title.js";
import ExpenseList from "./Components/expenseList.js";
import AddExpense from "./Components/addExpense";
import ExpenseTotal from "./Components/expenseTotal.js";

function App() {
  const [expenses, setExpenses] = useState([
    { name: "Groceries", cost: 50 },
    { name: "Rent", cost: 500 },
    { name: "Utilities", cost: 100 },
  ]);

  const addExpense = (name, cost) => {
    setExpenses([...expenses, { name, cost }]); // Adds onto the list of expenses. ...expenses keeps all the previous expenses.
  };

  const updateExpenses = (updateExpenses) => {
    // Defining State Update Function in Parent Component.
    setExpenses(updateExpenses);
  };

  return (
    <div>
      <Title />
      <ExpenseList expenses={expenses} onUpdateExpense={updateExpenses} />
      <AddExpense onAddExpense={addExpense} />
      <ExpenseTotal/>
    </div>
  );
}

export default App;
