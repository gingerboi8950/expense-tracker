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
    
    setExpenseName(expenseName.toLowerCase());
    setExpenseName(expenseName.charAt(0).toUpperCase() + expenseName.slice(1));

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
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src="./logo.png"
              alt="logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
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
      <div className="container bg-dark">
        <h1>Expenses</h1>
        <div className="input-group mb-3">
          <input
            id="expenseName"
            className="form-control"
            type="text"
            placeholder="Expense Name"
            onChange={(e) => setExpenseName(e.target.value)}
          ></input>
        </div>
        <div className="input-group mb-3">
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
              if(e.key === 'Enter') {
                addExpense();
              }
            }}
          ></input>
        </div>
        <p>Total Cost: ${totalExpense}</p>
        <button
          className="btn btn-secondary"
          onClick={() => {
            addExpense();
            fetchExpenses();
          }}
        >
          Submit
        </button>
        <div className="container">
          <div className="row">
            {expenses.map((expenses) => (
              <div
                className="col-md-4 mb-3"
                key={expenses._id}
                onMouseOver={() => setShowButton(expenses._id)}
                onMouseOut={() => {
                  setShowButton(null);
                }}
              >
                <div className="card shadow">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{expenses.name}</h5>
                    <p className="card-text">${expenses.cost}</p>

                    {showButton === expenses._id && (
                      <button
                        className="btn btn-danger"
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
