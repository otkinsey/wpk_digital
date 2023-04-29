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
    const presentationArea = document.querySelector(
      "#elearning-demo-content .overlay"
    );
    const presentationSVG = document.querySelector(
      "#elearning-demo-content .overlay #demo-svg"
    );
    const logoSVG = document.getElementById("logo-white");
    /** 1. Display "Welcome" */
    subtext1.classList.add("active");
    subtext2.classList.add("active");

    /** 2. Display logo */
    demoLogo.classList.add("active");

    /** 3. Fade logo and subtext */
    setTimeout(() => {
      demoLogo.classList = "";
      text1.classList = "";
      subtext2.classList = "";
    }, 23000);

    /** 4. Animate "Elearning" */
    subtext1.classList.add("animate1");

    /** 5. Fade backgroun */
    /** 6. Change height of demo-svg */
    presentationArea.classList.add("expanded");

    /** 7. Draw dendogram lines */
    let path1, path2, path3;
    let dendogram = [
      {
        pathId: "path1",
        text: "employee prescreening",
        M: [130, 257],
        L1: [230.257],
        L2: [230.57],
        L3: [380, 57],
      },
      {
        pathId: "path2",
        text: "OJT/skill development",
        M: [130, 263],
        L1: [380, 263],
        L2: [380, 263],
        L3: [380, 263],
      },
      {
        pathId: "path3",
        text: "compliance training",
        M: [130, 269],
        L1: [230, 269],
        L2: [230, 469],
        L3: [380, 469],
      },
    ];

    path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.classList.add("dendogram-path");
    path2.classList.add("dendogram-path");
    path3.classList.add("dendogram-path");
    path1.setAttribute("d", `M130 257 L 230 257 L 230 57 L 380 57`);
    path2.setAttribute("d", `M130 263 L 130 263 L 380 263`);
    path3.setAttribute("d", `M130 269 L 230 269 L 230 469 L 380 469`);

    /** 8. Create text nodes for usecase categories */
    let usecaseCoords = [];
    const usecases = dendogram.map((item, index) => {
      let usecase = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      let usecaseText = document.createTextNode(item.text);
      usecase.appendChild(usecaseText);
      usecase.setAttribute("style", "font-size:20px; fill:white");
      usecase.setAttribute("x", -130);
      usecase.setAttribute("y", 263);
      usecase.classList.add("usecase");
      usecase.id = `usecase-${index + 1}`;

      usecaseCoords.push([item.L3[0], item.L3[1]]);

      return usecase;
    });

    setTimeout(() => {
      dendogram.forEach((d, usecaseIndex) => {
        const uc = document.querySelector(
          `#elearning-demo-content #usecase-${usecaseIndex + 1}`
        );
        uc.classList.add("active");
        uc.setAttribute(
          "style",
          ` transform: translate(${usecaseCoords[usecaseIndex][0] + 130}px, ${
            usecaseCoords[usecaseIndex][1] - 258
          }px);`
        );
      });
    }, 27000);

    presentationSVG.append(path1, path2, path3, ...usecases);
  };

  /**
   * NOTE: Most of the demo animation code will be contained
   * in the useEffect call
   */
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

    text1.classList.add("active");
    if (props.demoPlaying) {
      setTimeout(() => {
        animatePresentation(svgWidth);
      }, 0);
    }
  }, []);
  /* end of useEffect ******************************************/

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
      <div className="overlay">
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
