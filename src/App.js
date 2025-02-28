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
import Expenses from "./Components/expenses.js";

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
            element={isAuthenticated ? <Expenses /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;