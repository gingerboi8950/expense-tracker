// src/components/AddExpense.js
import React, { useState } from "react";

const AddExpense = ( {onAddExpense} ) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseCost, setExpenseCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(expenseName && expenseCost) {
      onAddExpense(expenseName, parseFloat(expenseCost));
      setExpenseName('');
      setExpenseCost('');
    }
  };
  // Limit it to 40 characters.

  return (
    <form onSubmit={handleSubmit}>
      <div class="input-group mb-3">
        <span class="input-group-text">Name:</span>
        <input
          id="SubmitExpenseName"
          type="text"
          class="form-control"
          placeholder="Enter Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <span class="input-group-text">Cost: $</span>
        <input
          id="SubmitExpenseCost"
          type="number"
          class="form-control"
          placeholder="Enter Expense Cost"
          value={expenseCost}
          onChange={(e) => setExpenseCost(e.target.value)}
        />
      </div>
      <div></div>
      <button onClick={handleSubmit} type="button" class="btn btn-primary">
        Add Expense
      </button>
    </form>
  );
}

export default AddExpense;
