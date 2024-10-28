import React, { useState } from "react";

// Components
import ExpenseList from "./expenseList";
import CostCounter from "./costCounter.js";

function Menu() {
  // Attatched useState to the name, cost, & map because they will be re-rendered when a new expense is submitted.
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [expenses, setExpenses] = useState(new Map());

  function Revert() {
    // Resets the input boxes
    document.getElementById("CostName").value = "";
    document.getElementById("Cost").value = "";
  }

  function AddExpense() {
    // <Inputs> do not have Innerhtml values, instead they use value.
    const Newname = document.getElementById("CostName").value;
    const Newcost = document.getElementById("Cost").value;
    // Assign the new values for name & cost
    setName(Newname);
    setCost(Newcost);
    // Calculate the new totalCost
    setTotalCost(Number(totalCost) + Number(Newcost));
    // Re-make the Map
    setExpenses((prevExpenses) => new Map(prevExpenses.set(Newname, Newcost)));
    Revert();
  }

  function DeleteExpense(expenseName) {
    // Passed to expenseList as onDelete prop
    // Find the list item expense name
    //const expense = e.currentTarget.closest('li').querySelector('.expenseName').textContent;
    // remove that list item
    //expenses.delete(expense);
    // update list
    setExpenses((prevExpenses) => {
      const updatedExpenses = new Map(prevExpenses);
      updatedExpenses.delete(expenseName);
      return updatedExpenses;
    });
  }

  return (
    // forms will automatically reload the page when clicking the submit button. (Changed form -> body)
    <>
      <div class="row">
        <div class="col">
          <div class="card" style={{ width: "25rem" }}>
            <div class="input-group mb-3">
              <span class="input-group-text" id="name">
                Name:
              </span>
              <input
                type="text"
                id="CostName"
                class="form-control"
                placeholder="Expense Name"
              ></input>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="cost">
                Cost:
              </span>
              <input
                type="text"
                id="Cost"
                class="form-control"
                placeholder="Price"
              ></input>
            </div>
          </div>
          <button onClick={AddExpense} class="btn btn-primary">
            Submit
          </button>
        </div>
        <div class="col">
          <div class="card" style={{ width: "25rem" }}>
            <ExpenseList expenses={expenses} onDelete={DeleteExpense} />
          </div>
          <CostCounter expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default Menu;
