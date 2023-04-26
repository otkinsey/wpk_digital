import { useRef, useEffect, useState } from "react";
import { ReactComponent as LogoWhite } from "../../header/logo_white.svg";
// import { playAudioFile } from "../../../utils/helper.js";

const Play = (props) => {
  // DOM refs
  // const audioElement = useRef(null);
  const demoSvg = useRef(null);

  // Initialize DOM constants
  let text1, subtext1, subtext2, demoLogo, svgWidth;

  const Text = (opts) => {
    const textElement = (
      <text
        // ref={text1}
        x={opts.x}
        y={opts.y}
        fontSize={opts.size}
        stroke={opts.strokeColor ? opts.strokeColor : "white"}
        strokeWidth={opts.strokeWidth ? opts.strokeWidth : "0"}
        id={`${opts.id}`}
        style={{ visibility: "hidden" }}
      >
        {opts.text}
      </text>
    );

    return textElement;
  };

  const animatePresentation = (
    presentationWidth,
    presentationHeight = null
  ) => {
    /**1. Display subtext */
    subtext1.classList.add("active");
    subtext2.classList.add("active");

    /**2. Display logo */
    demoLogo.classList.add("active");

    /**3. Fade logo and subtext */
    setTimeout(() => {
      demoLogo.classList = "";
      text1.classList = "";
      subtext2.classList = "";
    }, 23000);

    /**4. Animate "Elearning" */
    subtext1.classList.add("animate1");

    /**5. Animate Elearning to the left */
  };

  useEffect(() => {
    text1 = document.getElementById("text1");
    subtext1 = document.getElementById("subtext1");
    subtext2 = document.getElementById("subtext2");
    demoLogo = document.getElementById("logo-white");

    svgWidth = document.getElementById("demo-svg").width.animVal.value;

    text1.setAttribute("x", 0.5 * svgWidth - 0.5 * text1.getBBox().width);
    text1.style.visibility = "visible";

    subtext1.setAttribute(
      "x",
      0.5 * svgWidth - (subtext1.getBBox().width + 40)
    );
    subtext1.style.visibility = "visible";

    subtext2.setAttribute("x", 0.5 * svgWidth + -35);
    subtext2.style.visibility = "visible";

    console.log(
      "s1x: ",
      subtext1.getAttribute("x"),
      "s1w: ",
      subtext1.getBBox().width,
      "s2x: ",
      subtext2.getAttribute("x"),
      "s2w: ",
      subtext2.getBBox().width
    );

    text1.classList.add("active");
    if (props.demoPlaying) {
      setTimeout(() => {
        animatePresentation(svgWidth);
      }, 0);
    }
  }, []);

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
                id="text1"
                attributeName="x"
                from={null}
                to={null}
                svg={svgWidth}
              />
              <Text
                x={0}
                y={75 + 40}
                text={"Elearning"}
                size="20"
                id="subtext1"
                attributeName="x"
                from={null}
                to={null}
                svg={svgWidth}
              />
              <Text
                x={0}
                y={75 + 40}
                text={"Demo Application"}
                size="20"
                id="subtext2"
                attributeName="x"
                from={null}
                to={null}
                svg={svgWidth}
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Play;
