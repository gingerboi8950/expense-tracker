import React, { useState } from "react";

function ExpenseList({ expenses, onDelete }) {
  const [updatedExpenses, setExpenses] = useState(new Map());

  // function DeleteExpense(e) {
  //   // Find the list item expense name 
  //   const expense = e.currentTarget.closest('li').querySelector('.expenseName').textContent;
  //   // remove that list item
  //   expenses.delete(expense);
  //   // update list
  //   setExpenses((prevExpenses) => new Map(prevExpenses));
  // }
  
  return (
    <ul class="list-group">
      <div class="container text-center">
        <div class="row">
          <div class="col">Name</div>
          <div class="col">Cost</div>
        </div>
      </div>
      {Array.from(expenses.entries()).map(
        (
          [name, cost] // .map(([name, cost]) => function is used to iterate over the array of entries, by deconstructing the [name, cost] pair and returning a corresponding <li> element.
        ) => (
          // Added the key=name so React can identify which items have been added/removed
          <li key={name} class="list-group-item">
            {" "}
            <div class="container text-center">
              <div class="row" onMouseOver={(e) => ShowElement(e)} onMouseOut={(e) => HideElement(e)}>
                <div class="col" className="col expenseName">{name}</div>
                <div class="col">${cost} </div>
                <button type="button" class="btn-close" aria-label="Close" style={{ display: "none" }} className="btn-close delete-btn" onClick={() => onDelete(name)}></button>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
}

function ShowElement(e) {
  const button = e.currentTarget.querySelector('.delete-btn');
  if (button) {
    button.style.display = "block";
  }
}
function HideElement(e) {
  const button = e.currentTarget.querySelector('.delete-btn');
  if (button) {
    button.style.display = "none";
  }
}

export default ExpenseList;
