import React from 'react';
import Expense from './expense.js';

function ExpenseList({ expenses }) {
    return (
        <div className="container">
            <h2 className="mt-4">Expenses</h2>
            <div className="list-group">
                {expenses.map((expense, index) => (
                    <Expense
                        key={index}
                        ExpenseName={expense.name}
                        ExpenseCost={expense.cost}
                    />
                ))}
            </div>
        </div>
    );
}

export default ExpenseList;