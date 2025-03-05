import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Components
import LoginForm from "./Components/loginForm.js";
import SignUpForm from "./Components/signUpForm.js";
import ExpenseMenu from "./Components/expenseMenu.js";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/expenses"
            element={isAuthenticated ? <ExpenseMenu /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
