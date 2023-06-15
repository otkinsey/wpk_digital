import "./App.css";
import Home from "./components/homePage";
import MainNav from "./components/mainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { ReactComponent as Logo } from "./components/header/logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // State variables
  const [active, setActive] = useState("inactive");
  const elearningVideo = useRef(null);
  const [demoPlaying, setDemoPlaying] = useState(false);
  const [demoContentVar, setDemoContentVar] = useState("default");

  const scrollTo = (id, menuState = active) => {
    const demoActive = document
      .getElementById("demo")
      .classList.contains("active");

    setTimeout(
      () => {
        const elem = document.getElementById(id.substring(id.indexOf("_") + 1));

        elem.scrollIntoView({ behavior: "smooth" });
        if (id === "nav_contact_us") {
          let input = document.querySelector("[name=first-name]");
          input.focus({ preventScroll: true });
        }
        if (menuState === "active") {
          toggleMenu();
        }
      },
      demoActive ? 1100 : 0
    );

    if (demoActive) toggleDemoLMS();
  };

  const [LMSActive, setLMSActive] = useState(false);

  const toggleDemoLMS = () => {
    if (!LMSActive) {
      scrollTo("demo");
      document.body.setAttribute("style", "overflow-y: hidden");
    } else {
      document.body.setAttribute("style", "overflow-y: scroll");
    }
    setLMSActive(!LMSActive);
    // return
  };

  const resetDemo = () => {
    if (elearningVideo.current) {
      setDemoPlaying(false);
    }

    setTimeout(() => {
      setDemoContentVar("default");
    }, 1100);
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
          <Logo id="wpk-logo" onClick={() => scrollTo("_hero")} />
        </div>
        <MainNav
          scrollTo={scrollTo}
          active={active}
          LMSActive={LMSActive}
          resetDemo={resetDemo}
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
                setLMSActive={setLMSActive}
                toggleDemoLMS={toggleDemoLMS}
                elearningVideo={elearningVideo}
                demoPlaying={demoPlaying}
                setDemoPlaying={setDemoPlaying}
                setDemoContentVar={setDemoContentVar}
                demoContentVar={demoContentVar}
                resetDemo={resetDemo}
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
