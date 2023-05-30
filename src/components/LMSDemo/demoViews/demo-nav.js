import { FaFilm, FaEdit } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { useRef, useEffect } from "react";
import { playAudioFile, stopAudioFile } from "../../../utils/helper.js";
const Default = (props) => {
  const audioElement = useRef(null);
  const audioFiles = [
    "audio.m4a",
    "elearning-usecases.m4a",
    "core-functionality.m4a",
  ];
  let audioIndex = 0;
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
      {/* <li onClick={props.setDemoContentVar} id="manage">
        <FaEdit />
        <span className="demo-option">Edit Content</span>
      </li>
      <li onClick={props.setDemoContentVar} id="manage">
        <IoSettingsSharp />
        <span className="demo-option">Manager Dashboard</span>
      </li> */}
    </ul>
  );
};

export default Default;
