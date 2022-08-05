import "./App.css";
import Home from "./components/homePage";
import MainNav from "./components/mainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ReactComponent as Logo } from "./components/header/logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [active, setActive] = useState("inactive");
  const scrollTo = (id, menuState = active) => {
    const elem = document.getElementById(id.substring(id.indexOf("_") + 1));
    console.log(elem);
    elem.scrollIntoView({ behavior: "smooth" });
    if (menuState === "active") {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    active === "inactive" ? setActive("active") : setActive("inactive");
    return active;
  };
  return (
    <div className="App">
      <header style={{}} id="header">
        <div>
          <FaBars id="mobile-nav-button" onClick={() => toggleMenu()}></FaBars>
          <Logo id="wpk-logo" />
        </div>
        <MainNav scrollTo={scrollTo} active={active}></MainNav>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home scrollTo={scrollTo} />} />
        </Routes>
      </Router>
      <footer style={{}}>
        <Logo style={{ height: 45 }} />
        <p>&copy; WPK Digital Solution copyright 2022. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
