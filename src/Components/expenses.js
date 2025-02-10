import React, { useEffect, useState } from "react";
import axios from "axios";

function Expenses() {
  const [expenses, setExpenses] = useState([]); // State to store expenses 
  
  useEffect(() => {
      const fetchExpenses = async () => {
    const token = localStorage.getItem("token");  // Retrieve stored JWT token

    if(!token) {
      console.error("No token found, user not authenticated.");
      return;
    }
    try {
      const response = await axios.get("http://localhost:3500/api/expense", {
        headers: { "Authorization": `Bearer ${token}`},
    });

    setExpenses(response.data);
  } catch (error) {
    console.error("Failed to fetch expenses:", error.response?.data?.message || error.message);
  } 
 }
    fetchExpenses(); 
  }, []);



  return (
  <>
  <h2>Expenses</h2>
  <ul>
    {expenses.map((expenses) => (
      <li key={expenses._id}>
        {expenses.name}: ${expenses.cost}
      </li>
    ))}
  </ul>
  </>
  );
};


export default Expenses;
