// import { useState } from "react";

import { useState, useRef } from "react";
import DemoNav from "./demoViews/demo-nav.js";
import Exam from "./demoViews/exam";
import Manage from "./demoViews/manage";
import Play from "./demoViews/play";
import { stopAudioFile } from "../../utils/helper.js";

const LMSDemo = (props) => {
  // State variables

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
            demoPlaying={props.demoPlaying}
            resetDemo={props.resetDemo}
            setDemoPlaying={props.setDemoPlaying}
          />
        );
    }
    return output;
  };

  const DemoContent = () => setDemoContent(props.demoContentVar);

  const endDemo = () => {
    if (props.elearningVideo.current) {
      // stopAudioFile(props.elearningVideo.current);
      // props.setLMSActive(false);
      // props.setDemoPlaying(false);
      props.resetDemo();
    }

    props.toggleDemoLMS();
    setTimeout(() => {
      props.setDemoContentVar("default");
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
                    setDemoContentVar={props.setDemoContentVar}
                    endDemo={endDemo}
                    resetDemo={props.resetDemo}
                    setDemoPlaying={props.setDemoPlaying}
                    demoPlaying={props.demoPlaying}
                    elearningVideo={props.elearningVideo}
                    demoContentVar={props.demoContentVar}
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
