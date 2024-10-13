import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';

// Components 
import Title from './Components/title.js'
import ExpenseList from './Components/expenseList.js';


function App() {

  const [expenses, setExpenses] = useState([
    { name: 'Groceries', cost: 50 },
    { name: 'Rent', cost: 500 },
    { name: 'Utilities', cost: 100 }
  ]);

  return (
    <div>
      <Title/>
      <ExpenseList expenses={expenses} />

    </div>
  );
}

export default App;
