import React, { useEffect, useState } from "react";
import "../CSS/style.css";

function ExpenseList({expenses, deleteExpense}) {
  const [showButton, setShowButton] = useState(null);

  return (
    <>
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
                <div class="card sm:max-w-sm">
                  <div class="card-header">
                    <h5 class="card-title font-bold">{expenses.name}</h5>
                  </div>

                  <div class="card-body">
                    <p>{expenses.cost}</p>
                  </div>

                  <div class="card-footer">
                    {showButton === expenses._id && (
                      <button className="btn btn-danger" onClick={() => deleteExpense(expenses._id)}>Delete</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}

export default ExpenseList;
