function ExpenseList({ expenses }) {
  return (
    <ul class="list-group">
      <div class="container text-center">
        <div class="row">
          <div class="col">Name</div>
          <div class="col">Cost</div>
        </div>
      </div>
      {Array.from(expenses.entries()).map(
        (
          [name, cost] // .map(([name, cost]) => function is used to iterate over the array of entries, by deconstructing the [name, cost] pair and returning a corresponding <li> element.
        ) => (
          // Added the key=name so React can identify which items have been added/removed
          <li key={name} class="list-group-item">
            {" "}
            <div class="container text-center">
              <div class="row">
                <div class="col">{name}</div>
                <div class="col">{cost} </div>
                
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
}

export default ExpenseList;
