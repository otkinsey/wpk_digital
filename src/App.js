import "./App.css";
import Home from "./components/homePage";

import { ReactComponent as Logo } from "./components/header/logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const scrollTo = (id) => {
    const elem = document.getElementById(id.substring(id.indexOf("_") + 1));
    console.log(elem);
    elem.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <header
        style={{
          backgroundColor: "black",

          height: "75px",

          margin: "none",
        }}
        id="header"
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
          <li
            onClick={(event) => {
              scrollTo(event.target.id);
            }}
            id="nav_elearning"
          >
            ELEARNING
          </li>
          <li
            onClick={(event) => {
              scrollTo(event.target.id);
            }}
            id="nav_document_management"
          >
            DOCUMENT MANAGEMENT
          </li>
          <li
            onClick={(event) => {
              scrollTo(event.target.id);
            }}
            id="nav_digital_transformation"
          >
            DIGITALTRANSFORMATION
          </li>
          <li
            onClick={(event) => {
              scrollTo(event.target.id);
            }}
            id="nav_contact_us"
          >
            CONNECT WITH US
          </li>
        </ul>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home scrollTo={scrollTo} />} />
        </Routes>
      </Router>
      <footer
        style={{
          background: "black",
          height: "150px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 30%",
        }}
      >
        <Logo style={{ height: 45 }} />
        <p>&copy; WPK Digital Solution copyright 2022. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
