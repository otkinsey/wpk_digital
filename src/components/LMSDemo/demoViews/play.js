import { useRef, useEffect, useState } from "react";
import { ReactComponent as LogoWhite } from "../../header/logo_white.svg";
import {
  playAudioFile,
  stopAudioFile,
  centerSvgContent,
} from "../../../utils/helper.js";

const Play = (props) => {
  // DOM refs
  const audioElement = useRef(null);
  const demoSvg = useRef(null);

  // State variables

  const Text = (opts) => {
    const textElement = (
      <text
        // ref={text1}
        x={opts.x}
        y={opts.y}
        fontSize={opts.size}
        stroke={opts.strokeColor ? opts.strokeColor : "white"}
        strokeWidth={opts.strokeWidth ? opts.strokeWidth : "0"}
        id={`text-${opts.id}`}
        style={{ visibility: "hidden" }}
      >
        {opts.text}
      </text>
    );

    return textElement;
  };

  useEffect(() => {
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    const svgWidth = document.getElementById("demo-svg").width.animVal.value;

    text1.setAttribute("x", 0.5 * svgWidth - 0.5 * text1.getBBox().width);
    text1.style.visibility = "visible";

    text2.setAttribute("x", 0.5 * svgWidth - 0.5 * text2.getBBox().width);
    text2.style.visibility = "visible";
  }, []);

  useEffect(() => {
    if (props.demoPlaying.current) {
      playAudioFile(audioElement);
      audioElement.current.addEventListener("ended", () => {
        props.demoPlaying.current = false;
      });
    }
  });

  return (
    <div
      style={{
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% center",
        backgroundImage:
          "url('elearnng_1_radek-grzybowski-eBRTYyjwpRY-unsplash.jpg')",
      }}
      className="main-backdrop"
    >
      <div
        className="overlay"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <LogoWhite style={{ fill: "white" }} />
        <div>
          <svg id="demo-svg" ref={demoSvg}>
            <g style={{ fill: "white" }}>
              {/* TODO: replace with a data object that instatiates 2 Text components */}
              <Text
                x={0}
                y={75}
                text={"Welcome."}
                size={"40px"}
                strokeWidth="1"
                strokeColor="white"
                id="1"
              />
              <Text
                x={0}
                y={75 + 40}
                text={"Elearning Demo Application"}
                size="1.3rem"
                id="2"
              />
            </g>
          </svg>
        </div>
        <audio id="demoAudio" src="audio.m4a" ref={audioElement}></audio>
      </div>
    </div>
  );
};

export default Play;
