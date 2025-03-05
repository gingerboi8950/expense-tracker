import { useState } from "react";

function ExpenseInput({ addExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  function handleSubmit() {
    addExpense(expenseName, expenseCost, expenseDate);
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseCost").value = "";
    document.getElementById("expenseDate").value = "";
  }

  return (
    <>
      <div classname="userInput flex flex-col intems-center">
        <div className="input-group mb-3">
          <span className="input-group-text" id="spanDate">
            Name
          </span>
          <input
            id="expenseName"
            className="form-control"
            type="text"
            placeholder="Expense Name"
            onChange={(e) => setExpenseName(e.target.value)}
          ></input>
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text" id="spanMoney">
            $
          </span>
          <input
            id="expenseCost"
            className="form-control"
            type="text"
            placeholder="Cost"
            onChange={(e) => setExpenseCost(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          ></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="spanDate">
            Date
          </span>
          <input
            id="expenseDate"
            className="form-control"
            type="date"
            onChange={(e) => setExpenseDate(e.target.value)}
          ></input>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </>
  );
}

export default ExpenseInput;
