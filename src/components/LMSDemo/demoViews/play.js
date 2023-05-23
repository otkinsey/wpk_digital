import { useRef, useEffect, useState } from "react";
import { ReactComponent as LogoWhite } from "../../header/logo_white.svg";
import { ReactComponent as ConcentricCircle } from "./concentric.svg";

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
    const timeout1 = setTimeout(() => {
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
        text: "Employee Prescreening",
        M: [130, 257],
        L1: [230.257],
        L2: [230.57],
        L3: [380, 57],
      },
      {
        pathId: "path2",
        text: "On the Job Training",
        M: [130, 263],
        L1: [380, 263],
        L2: [380, 263],
        L3: [380, 263],
      },
      {
        pathId: "path3",
        text: "Compliance Training",
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
    path1.setAttribute("d", `M150 257 L 250 257 L 250 57 L 380 57`);
    path2.setAttribute("d", `M150 263 L 150 263 L 400 263`);
    path3.setAttribute("d", `M150 269 L 250 269 L 250 469 L 380 469`);

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
      usecase.setAttribute("x", -180);
      usecase.setAttribute("y", 263);
      usecase.classList.add("usecase");
      usecase.id = `usecase-${index + 1}`;

      usecaseCoords.push([item.L3[0], item.L3[1]]);

      return usecase;
    });

    const timeout2 = setTimeout(() => {
      dendogram.forEach((d, usecaseIndex) => {
        const uc = document.querySelector(
          `#elearning-demo-content #usecase-${usecaseIndex + 1}`
        );
        if (uc) {
          uc.classList.add("active");
          uc.setAttribute(
            "style",
            ` transform: translate(${usecaseCoords[usecaseIndex][0] + 180}px, ${
              usecaseCoords[usecaseIndex][1] - 258
            }px);`
          );
        }
      });
      Array.from(document.getElementsByClassName("dendogram-path")).forEach(
        (item, index) => {
          item.classList.add("active");
        }
      );
    }, 27000);

    /** 9. Remove dendogram */
    const timeout3 = setTimeout(() => {
      Array.from(document.getElementsByClassName("dendogram-path")).forEach(
        (item, index) => {
          item.classList.remove("active");
        }
      );
      subtext1.classList.remove("active");
      let ucs = document.getElementsByClassName("usecase");
      Array.from(ucs).forEach((item, index) => {
        item.setAttribute(
          "style",
          `transform:translate(${usecaseCoords[index][0] + 130}px, ${
            usecaseCoords[index][1] - 258 - 140 * index
          }px);`
        );
      });
    }, 40000);

    const timeout4 = setTimeout(() => {
      presentationSVG.classList.remove("active");
    }, 38000);

    /** 10.Display rotating graphic */
    const timeout5 = setTimeout(() => {
      presentationSVG.classList.add("removed");
      const graphic = document.getElementById("rotating-graphic");
      graphic.classList.add("active");
      setTimeout(() => {
        graphic.classList.add("rotate");
      }, 0);
      //
    }, 40000);

    presentationSVG.append(path1, path2, path3, ...usecases);
  };

  /**
   * NOTE: Most of the demo animation code will be contained
   * in the useEffect call
   */
  useEffect(() => {
    const timeoutIds = [];
    const svg = document.getElementById("demo-svg");
    text1 = document.getElementById("text1");
    subtext1 = document.getElementById("subtext1");
    subtext2 = document.getElementById("subtext2");
    demoLogo = document.getElementById("logo-white");

    svgWidth = svg.width.animVal.value;

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
      animatePresentation(svgWidth);
    }
  }, []);
  /* end of useEffect ******************************************/

  useEffect(() => {
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
      clearTimeout(id);
      console.log("play.js timeout id: ", id);
    }
  }, [props.demoPlaying]);

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
        <div>
          <LogoWhite style={{ fill: "white" }} />
        </div>
        <div>
          <svg
            id="demo-svg"
            ref={demoSvg}
            className="active"
            preserveAspectoRatio="xMinYmin meet"
          >
            <g style={{ fill: "white" }}>
              {/* TODO: replace with a data object that instatiates 2 Text components  */}
              <Text
                x={0}
                y={75}
                text={"Welcome"}
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
          <ConcentricCircle />
        </div>
      </div>
    </div>
  );
};

export default Play;
