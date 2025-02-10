import "bootstrap/dist/css/bootstrap.min.css";

// Components
import LoginForm from './Components/loginForm.js';
import Expenses from "./Components/expenses.js";

function App() {

  return (
    <div>
      <h1>Expense Tracker</h1>
      <LoginForm/>
      <Expenses/>
      <br/>

    </div>
  );
}

export default App;
