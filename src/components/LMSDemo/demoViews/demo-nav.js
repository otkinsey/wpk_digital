import { FaRegPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
const Default = (props) => {
  return (
    <ul className="demo-options">
      <li
        onClick={(e) => {
          props.setDemoContentVar(e);
          props.setDemoPlaying(!props.demoPlaying);
        }}
        id="play"
      >
        {props.demoPlaying ? <FaPauseCircle /> : <FaRegPlayCircle />}
        <span className="demo-option">play presentation</span>
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
