import { FaFilm, FaEdit } from "react-icons/fa";
import { useRef, useEffect } from "react";
const Default = (props) => {
  const audioElement = useRef(null);
  useEffect(() => {
    const contentVar =
      props.demoContentVar === "default"
        ? props.demoContentVar
        : props.demoContentVar.target.id;
    document.querySelector(
      ".demo-interface"
    ).className = `row demo-interface ${contentVar}`;
  }, [props.demoContentVar]);

  useEffect(() => {
    if (props.demoPlaying === false) {
      let id = window.setTimeout(() => {}, 0);
      while (id--) {
        clearTimeout(id);
        console.log("play.js timeout id: ", id);
      }
    }
  }, [props.demoPlaying]);
  return (
    <ul className="demo-options">
      <li
        onClick={(e) => {
          props.setDemoContentVar(e);
        }}
        id="play"
      >
        <FaFilm />
        <span className="demo-option">Elearning presentation</span>
        <audio id="demoAudio" src="audio.m4a" ref={audioElement}></audio>
      </li>
      <li onClick={props.setDemoContentVar} id="exam">
        <FaEdit />
        <span className="demo-option">Take Quiz</span>
      </li>
    </ul>
  );
};

export default Default;
