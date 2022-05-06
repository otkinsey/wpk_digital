import { ReactComponent as Logo } from "./components/header/logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/homePage";

function App() {
  return (
    <div className="App">
      <header
        style={{
          backgroundColor: "black",

          height: "75px",

          margin: "none",
        }}
      >
        <ul
          style={{
            color: "white",
            listStyleType: "none",
            fontWeight: "bold",
            fontSize: ".8rem",
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <li>
            <Logo />
          </li>
          <li>ELEARNING</li>
          <li>DOCUMENT MANAGEMENT</li>
          <li>DIGITALTRANSFORMATION</li>
          <li>CONNECT WITH US</li>
        </ul>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
