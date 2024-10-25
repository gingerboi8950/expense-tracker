function Expense({ name, cost }) {
  return (
    <>
      <li>
        <div class="card">
          <input type="text" id="expenseName">
            {name}
          </input>
          <input type="text" id="expenseCost">
            {cost}
          </input>
        </div>
      </li>
    </>
  );
}
