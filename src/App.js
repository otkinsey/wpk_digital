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
    console.log("app.js scrollTo");
    const elem = document.getElementById(id.substring(id.indexOf("_") + 1));
    elem.scrollIntoView({ behavior: "smooth" });
    if (id === "nav_contact_us") {
      let input = document.querySelector("[name=first-name]");
      input.focus({ preventScroll: true });
    }
    if (menuState === "active") {
      toggleMenu();
    }
  };

  const [LMSActive, setLMSActive] = useState(false);

  const toggleDemoLMS = () => {
    if (!LMSActive) {
      scrollTo("demo");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    return setLMSActive(!LMSActive);
  };

  const toggleMenu = () => {
    active === "inactive" ? setActive("active") : setActive("inactive");
    return active;
  };
  return (
    <div className="App">
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <header style={{}} id="header">
        <div>
          <FaBars id="mobile-nav-button" onClick={() => toggleMenu()}></FaBars>
          <Logo id="wpk-logo" />
        </div>
        <MainNav
          scrollTo={scrollTo}
          active={active}
          LMSActive={LMSActive}
          toggleDemoLMS={toggleDemoLMS}
        ></MainNav>
      </header>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                scrollTo={scrollTo}
                LMSActive={LMSActive}
                toggleDemoLMS={toggleDemoLMS}
              />
            }
          />
        </Routes>
      </Router>
      <footer>
        <Logo style={{ height: 45 }} />
        <p>&copy; WPK Digital Solution copyright 2022. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
