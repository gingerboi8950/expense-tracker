import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/style.css";

function Expenses() {
  const [expenses, setExpenses] = useState([]); // State to store expenses
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [totalExpense, settotalExpense] = useState(0);
  const [showButton, setShowButton] = useState(null);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

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
    const total = expenses.reduce((sum, expense) => sum + expense.cost, 0);
    settotalExpense(total);
  }, [expenses]);

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
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img
              src="./logo.png"
              alt="logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Expense Tracker
          </a>
          <button
            id="logoutBtn"
            onClick={handleLogout}
            class="btn btn-secondary"
          >
            Logout
          </button>
        </div>
      </nav>
      <br />
      <div class="container bg-dark">
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
        <p>Total Cost: ${totalExpense}</p>
        <button
          class="btn btn-secondary"
          onClick={() => {
            addExpense();
            fetchExpenses();
          }}
        >
          Submit
        </button>
        <div class="container">
          <div class="row">
          {expenses.map((expenses) => (
            <div
              class="col-md-4 mb-3"
              key={expenses._id}
              onMouseOver={() => setShowButton(expenses._id)}
              onMouseOut={() => {
                setShowButton(null);
              }}
            >
              <div className="card shadow">
              <div class="card-body">
                <h5 class="card-title">{expenses.name}</h5>
                <p class="card-text">${expenses.cost}</p>

                {showButton === expenses._id && (
                  <button
                    class="btn btn-danger"
                    onClick={() => deleteExpense(expenses._id)}
                  >
                    Delete
                  </button>
                )}
              </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;
