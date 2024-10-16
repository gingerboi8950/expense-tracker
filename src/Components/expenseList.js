import Expense from './expense.js';
import ExpenseTotal from './expenseTotal.js';

function ExpenseList({ expenses, onUpdateExpense }) {    
    const editPrice = (name) => {
        const updatedExpenses = expenses.map(expense => {
            if(expense.name === name) {
                return {...expenses, cost: expense.cost, name: expense.name};
            }
           return expense; 
        });

        // Assuming you want to update the state in the parent component
        // You would need to pass a function from the parent to update the state
        onUpdateExpense(updatedExpenses);
    };

    return (
        <div className="container">
            <h2 className="mt-4">Expenses</h2>
            <div className="list-group">
                {expenses.map((expense, index) => (
                    <Expense
                        key={index}
                        ExpenseName={expense.name}
                        ExpenseCost={expense.cost}
                        onEditPrice={editPrice}
                    />
                ))}
            </div>
            <ExpenseTotal expenses={expenses}/>
        </div>
    );
}

export default ExpenseList;