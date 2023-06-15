import { useState, useEffect } from "react";

import DemoNav from "./demoViews/demo-nav.js";
import Exam from "./demoViews/exam";
import Manage from "./demoViews/manage";
import Play from "./demoViews/play";

const LMSDemo = (props) => {
  const [mobile, setMobile] = useState(null);
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
            elearningVideo={props.elearningVideo}
          />
        );
    }
    return output;
  };

  const DemoContent = () => setDemoContent(props.demoContentVar);

  const endDemo = () => {
    if (props.elearningVideo.current) {
      setTimeout(() => {
        props.resetDemo();
      }, 2000);
    }

    props.toggleDemoLMS();
    setTimeout(() => {
      props.setDemoContentVar("default");
    }, 0);
  };

  useEffect(() => {
    if (window.innerWidth < 1101) setMobile(true);
    else setMobile(false);
  }, [props.LMSActive]);

  return mobile ? (
    <div
      id="demo"
      className={`container-fluid slide-down-panel ${
        props.LMSActive ? "active" : ""
      }`}
    >
      <div className="row demo-interface">
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
            <h3 className="message">
              For optimal experience please use a wider screen.
            </h3>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      id="demo"
      className={`container-fluid slide-down-panel ${
        props.LMSActive ? "active" : ""
      }`}
    >
      <div className="row demo-interface">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSDemo;
