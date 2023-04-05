// import { useState } from "react";

import { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const LMSDemo = (props) => {
  const audioElement = useRef(null);

  const playAudioFile = (audio) => {
    audio.current.currentTime = 0;
    audio.current.play();
  };

  const stopAudioFile = (audio) => {
    audio.current.pause();
  };
  useEffect(() => {
    props.LMSActive ? playAudioFile(audioElement) : stopAudioFile(audioElement);
  });

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
            <div id="demo-content" className="row gx-5">
              <div className="col col-6 section-text">
                <h1>Welcome to the WPK Digital Solutions ELearning Demo.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button className="btn-secondary button">
                  continue &nbsp; <FaArrowRight />
                </button>
              </div>
              <div className="col col-6">
                <audio
                  id="demoAudio"
                  src="audio.m4a"
                  ref={audioElement}
                ></audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSDemo;
