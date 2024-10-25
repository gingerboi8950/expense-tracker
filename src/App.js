<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Title from "./Components/title.js";
import Menu from "./Components/menu.js";


function App() {

  return (
    <div>
      <Title />
      <Menu/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
