// import { useState } from "react";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Default from "./demoViews/default";
import Exam from "./demoViews/exam";
import Manage from "./demoViews/manage";
import Play from "./demoViews/play";

const LMSDemo = (props) => {
  const [demoContentVar, setDemoContentVar] = useState("default");

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
        output = <Play LMSActive={props.LMSActive} />;
    }
    return output;
  };

  const DemoContent = () => setDemoContent(demoContentVar);

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
            <div className="row">
              <div className="col-sm toggle-row" id="">
                <button
                  className="button btn-primary"
                  onClick={() => props.toggleDemoLMS()}
                >
                  End demo
                </button>
              </div>
            </div>
            <div id="demo-content" className="row gx-3">
              <div className="col col-3 section-text">
                <div>
                  <h2>
                    Welcome to the WPK Digital Solutions Elearning Demo
                    Application.
                  </h2>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p> */}
                  <Default setDemoContentVar={setDemoContentVar} />
                </div>
              </div>
              <div className="col col-9">
                <div>
                  <h2>Choose an Option</h2>
                  <DemoContent />

                  {/* selectively render component on button click see the link below for details:  */}
                  {/* https://stackoverflow.com/questions/54188654/how-to-load-a-new-component-on-button-click-in-reactjs  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSDemo;
