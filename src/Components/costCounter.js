function CostCounter({ expenses }) {
  var totalCost = 0;
  expenses.forEach((value) => {
    totalCost += parseFloat(value);
  });
  return <span class="fw-bold">Total Cost: {totalCost}</span>;
}

export default CostCounter;
