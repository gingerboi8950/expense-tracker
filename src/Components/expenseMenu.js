import axios from "axios";
import React, { useState, useEffect } from "react";

// Components
import ExpenseInput from "./expenseInput.js";
import ExpenseList from "./expenseList.js";

function ExpenseMenu() {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, settotalExpense] = useState(0);
  const token = localStorage.getItem("token"); // Retrieve stored JWT token
  const handleLogout = async () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchExpenses = async () => {
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

    fetchExpenses();

    const total = expenses.reduce((sum, expense) => sum + expense.cost, 0);
    settotalExpense(total);
  }, [expenses]);

  const deleteExpense = async (id) => {
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

  const addExpense = async (expenseName, expenseCost, expenseDate) => {
    if (!token) {
      console.error("No token found, user not authenticated.");
      return;
    }

    if (!expenseName || !expenseCost || isNaN(expenseCost)) {
      alert("Invalid expense.");
      return;
    } else if (expenseCost <= 0) {
      alert("Expense must be greater than zero.");
      return;
    } else if (!expenseDate) {
      alert("Invalid date");
    }

    // Modify Name
    expenseName = expenseName.toLowerCase();
    expenseName = expenseName.charAt(0).toUpperCase() + expenseName.slice(1);
    
    
    
    try {
      const response = await axios.post(
        "http://localhost:3500/api/expense",
        { name: expenseName, cost: expenseCost, date: expenseDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Expense posted.", response.data);
      setExpenses([...expenses, response.data]);
    } catch (error) {
      console.log(
        "Expense failed to post.",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            {/* <img
              src="./logo.png"
              alt="logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            /> */}
            Expense Tracker
          </a>
          <button
            id="logoutBtn"
            onClick={handleLogout}
            className="btn btn-secondary"
          >
            Logout
          </button>
        </div>
      </nav>
      <br />

      <div className="container bg-dark w-1/3">
        <div class="flex justify-left py-2">
          <span class="text-3xl text-white font-semibold">Expenses</span>
        </div>
        <ExpenseInput addExpense={addExpense} />
        <div class="flex justify-center mb-2">
          <span class="text-2xl text-white pt-2">
            Total Cost: ${totalExpense}
          </span>
        </div>
      </div>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </>
  );
}

export default ExpenseMenu;
