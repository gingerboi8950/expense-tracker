function Expense({ExpenseName, ExpenseCost}) {

    return (
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">{ExpenseName}</h5>
                <p className="card-text">${ExpenseCost}</p>
            </div>
        </div>
    );

};


export default Expense;