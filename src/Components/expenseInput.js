import { useState } from "react";

function ExpenseInput({ addExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");

  function handleSubmit() {
    setExpenseName(expenseName.toLowerCase());
    setExpenseName(expenseName.charAt(0).toUpperCase() + expenseName.slice(1));
    addExpense(expenseName, expenseCost);
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseCost").value = "";
  }

  return (
    <>
      <div classname="userInput flex flex-col intems-center">
        <div className="input-group mb-3">
          <input
            id="expenseName"
            className="form-control"
            type="text"
            placeholder="Expense Name"
            onChange={(e) => setExpenseName(e.target.value)}
          ></input>
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text" id="basic-addon1">
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
