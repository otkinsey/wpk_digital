import { useRef, useEffect, useState } from "react";
import { ReactComponent as LogoWhite } from "../../header/logo_white.svg";
import { playAudioFile } from "../../../utils/helper.js";

const Play = (props) => {
  // DOM refs
  // const audioElement = useRef(null);
  const demoSvg = useRef(null);

  // Initialize DOM constants
  let text1, text2, demoLogo;

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

  const animatePresentation = () => {
    text2.classList.add("active");
    demoLogo.classList.add("active");
  };

  useEffect(() => {
    text1 = document.getElementById("text-1");
    text2 = document.getElementById("text-2");
    demoLogo = document.getElementById("logo-white");

    const svgWidth = document.getElementById("demo-svg").width.animVal.value;

    text1.setAttribute("x", 0.5 * svgWidth - 0.5 * text1.getBBox().width);
    text1.style.visibility = "visible";

    text2.setAttribute("x", 0.5 * svgWidth - 0.5 * text2.getBBox().width);
    text2.style.visibility = "visible";

    text1.classList.add("active");
  }, []);

  useEffect(() => {
    if (props.demoPlaying) {
      //     // playAudioFile(audioElement);
      //     audioElement.current.addEventListener("ended", () => {
      //       props.demoPlaying = false;
      //     });

      //     // DOM maniputlations can occurs inside useEffect call
      setTimeout(() => {
        animatePresentation();
      }, 1000);
    } // end if
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
      </div>
    </div>
  );
};

export default Play;
