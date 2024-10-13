// src/components/AddExpense.js
import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseCost, setExpenseCost] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/expenses/add', {
        expenseName,
        expenseCost,
      });
      console.log(response.data);
    } catch (err) {
      console.error('Error adding expense:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expense Cost"
        value={expenseCost}
        onChange={(e) => setExpenseCost(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
