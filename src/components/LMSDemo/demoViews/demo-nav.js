import { FaRegPlayCircle, FaRegStopCircle, FaEdit } from "react-icons/fa";
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
          audioElement.current.setAttribute("src", audioFiles[audioIndex]);
          /* Display desired view in presentation area */
          props.setDemoContentVar(e);

          props.demoPlaying
            ? props.resetDemo(audioElement)
            : playAudioFile(audioElement, 0);

          props.setDemoPlaying(!props.demoPlaying);

          /** Pass audioFile ref to index.js */
          props.childAudioFile.current = audioElement;

          /** Set next audio to play */
          function playNextAudio() {
            audioIndex += 1;

            if (audioIndex < 3) {
              audioElement.current.setAttribute("src", audioFiles[audioIndex]);
              playAudioFile(audioElement);
            } else {
              audioIndex = 0;
              setTimeout(props.resetDemo(), 700);
              audioElement.current.removeEventListener("ended", playNextAudio);
            }
          }

          audioElement.current.addEventListener("ended", playNextAudio);

          return;
        }}
        id="play"
      >
        {props.demoPlaying ? <FaRegStopCircle /> : <FaRegPlayCircle />}
        <span className="demo-option">play presentation</span>
        <audio id="demoAudio" src="audio.m4a" ref={audioElement}></audio>
      </li>
      <li onClick={props.setDemoContentVar} id="exam">
        <MdComputer />
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
