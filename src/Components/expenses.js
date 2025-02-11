import React, { useEffect, useState } from "react";
import axios from "axios";

function Expenses() {
  const [expenses, setExpenses] = useState([]); // State to store expenses
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [showButton, setShowButton] = useState(null);

  function Revert() {
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseCost").value = "";
  }

  const fetchExpenses = async () => {
    const token = localStorage.getItem("token"); // Retrieve stored JWT token

    if (!token) {
      console.error("No token found, user not authenticated.");
      return;
    }
    try {
      const response = await axios.get("http://localhost:3500/api/expense", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setExpenses(response.data);
    } catch (error) {
      console.error(
        "Failed to fetch expenses:",
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    const token = localStorage.getItem("token"); // Retrieve stored JWT token

    if (!token) {
      console.error("No token found, user not authenticated.");
      return;
    }

    if (!expenseName || !expenseCost || isNaN(expenseCost)) {
      alert("Invalid expense.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3500/api/expense",
        { name: expenseName, cost: expenseCost },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Expense posted.", response.data);
      Revert();
      setExpenseCost([...expenses, response.data]);
      setExpenseName("");
      setExpenseCost("");
    } catch (error) {
      console.log(
        "Expense failed to post.",
        error.response?.data?.message || error.message
      );
    }
  };

  const deleteExpense = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found, user not authenticated.");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:3500/api/expense/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Expense deleted sucessfully.");
      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (error) {
      console.log(
        "Expense failed to delete.",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <>
      <div class="container">
        <h1>Expenses</h1>
        <div class="input-group mb-3">
          <input
            id="expenseName"
            class="form-control"
            type="text"
            placeholder="Expense Name"
            onChange={(e) => setExpenseName(e.target.value)}
          ></input>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            $
          </span>
          <input
            id="expenseCost"
            class="form-control"
            type="text"
            placeholder="Cost"
            onChange={(e) => setExpenseCost(e.target.value)}
          ></input>
        </div>

        <button
          class="btn btn-secondary"
          onClick={() => {
            addExpense();
            fetchExpenses();
          }}
        >
          Submit
        </button>
        <ul>
          {expenses.map((expenses) => (
            <li
              key={expenses._id}
              onMouseOver={() => setShowButton(expenses._id)}
              onMouseOut={() => {
                setShowButton(null);
              }}
            >
              {expenses.name}: ${expenses.cost}
              {showButton === expenses._id && (
                <button
                  class="btn btn-danger"
                  onClick={() => deleteExpense(expenses._id)}
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Expenses;
