// import { useState } from "react";

import { useState, useRef } from "react";
import DemoNav from "./demoViews/demo-nav.js";
import Exam from "./demoViews/exam";
import Manage from "./demoViews/manage";
import Play from "./demoViews/play";
import { stopAudioFile } from "../../utils/helper.js";

const LMSDemo = (props) => {
  // State variables
  const [demoContentVar, setDemoContentVar] = useState("default");
  const childAudioFile = useRef(null);

  const [demoPlaying, setDemoPlaying] = useState(false);

  const setDemoContent = (e) => {
    let output;
    let switchVar = e === "default" ? "default" : e.target.id;
    switch (switchVar) {
      case "exam":
        output = <Exam />;
        break;
      case "manage":
        output = <Manage />;
        break;
      default:
        output = (
          <Play
            LMSActive={props.LMSActive}
            demoPlaying={demoPlaying}
            setDemoPlaying={setDemoPlaying}
          />
        );
    }
    return output;
  };

  const DemoContent = () => setDemoContent(demoContentVar);

  const endDemo = () => {
    if (childAudioFile.current) {
      stopAudioFile(childAudioFile.current);
      props.setLMSActive(false);
      setDemoPlaying(false);
    }

    props.toggleDemoLMS();
    setTimeout(() => {
      setDemoContentVar("default");
    }, 1100);
  };

  const resetDemo = () => {
    if (childAudioFile.current) {
      stopAudioFile(childAudioFile.current);
      props.setLMSActive(false);
      setDemoPlaying(false);
    }

    setTimeout(() => {
      setDemoContentVar("default");
    }, 1100);
  };

  return (
    <div
      id="demo"
      className={`container-fluid slide-down-panel ${
        props.LMSActive ? "active" : ""
      }`}
    >
      <div className="row demo-interface" id="">
        <div className="col col-12">
          <div className="wrapper">
            <button
              id="elearning-end-demo"
              className="button btn-primary"
              onClick={() => {
                endDemo();
              }}
            >
              End demo
            </button>
            <div id="elearning-demo-content" className="row gx-3">
              <div className="col col-3 section-text">
                <div>
                  <h2>Elearning Demo Application</h2>
                  <DemoNav
                    setDemoContentVar={setDemoContentVar}
                    endDemo={endDemo}
                    reset={resetDemo}
                    setDemoPlaying={setDemoPlaying}
                    demoPlaying={demoPlaying}
                    childAudioFile={childAudioFile}
                    demoContentVar={demoContentVar}
                  />
                </div>
              </div>
              <div className="col col-9">
                <DemoContent />
                {/* selectively render component on button click see the link below for details:  */}
                {/* https://stackoverflow.com/questions/54188654/how-to-load-a-new-component-on-button-click-in-reactjs  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSDemo;
