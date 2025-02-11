import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Components
import LoginForm from "./Components/loginForm.js";
import Expenses from "./Components/expenses.js";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <div>
      

      <br />

      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/expenses"
            element={isAuthenticated ? <Expenses /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
