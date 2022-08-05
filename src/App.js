import "./App.css";
import Home from "./components/homePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
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
      <header style={{}} id="header">
        <div>
          <FaBars id="mobile-nav-button"></FaBars>
          <Logo />
        </div>
        <ul id="main-nav" style={{}}>
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
            DIGITAL TRANSFORMATION
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
          height: "150px",
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
