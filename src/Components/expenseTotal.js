import React, { useState, useEffect } from "react";

function ExpenseTotal({ expenses }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense += expense.cost;
    });
    setTotal(totalExpense);
  }, [expenses]);

  return (
    <div>
      <p>Expense Total: ${total}</p>
    </div>
  );
}

export default ExpenseTotal;
