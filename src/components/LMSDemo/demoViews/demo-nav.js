import { FaRegPlayCircle, FaRegStopCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";
import {
  playAudioFile,
  stopAudioFile,
  centerSvgContent,
} from "../../../utils/helper.js";
const Default = (props) => {
  const audioElement = useRef(null);

  useEffect(() => {
    if (props.demoPlaying) {
      // playAudioFile(audioElement);
      // audioElement.current.addEventListener("ended", () => {
      //   props.demoPlaying = false;
      // });
      // DOM maniputlations can occurs inside useEffect call
      // setTimeout(() => {
      //   animatePresentation();
      // }, 1000);
    }
  });
  return (
    <ul className="demo-options">
      <li
        onClick={(e) => {
          /* Display desired view in presentation area */
          props.setDemoContentVar(e);

          props.demoPlaying
            ? stopAudioFile(audioElement)
            : playAudioFile(audioElement, 0);

          props.setDemoPlaying(!props.demoPlaying);
          // props.setDemoPlaying(!props.demoPlaying);
          return;
        }}
        id="play"
      >
        {props.demoPlaying ? <FaRegStopCircle /> : <FaRegPlayCircle />}
        <span className="demo-option">play presentation</span>
        <audio id="demoAudio" src="audio.m4a" ref={audioElement}></audio>
      </li>
      <li onClick={props.setDemoContentVar} id="exam">
        <IoSettingsSharp />
        <span className="demo-option">take exam</span>
      </li>
      <li onClick={props.setDemoContentVar} id="manage">
        <IoSettingsSharp />
        <span className="demo-option">Edit Content</span>
      </li>
      <li onClick={props.setDemoContentVar} id="manage">
        <IoSettingsSharp />
        <span className="demo-option">Manager Dashboard</span>
      </li>
    </ul>
  );
};

export default Default;
