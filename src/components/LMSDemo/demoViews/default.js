import { FaRegPlayCircle, FaClipboardCheck } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
const Default = (props) => {
  return (
    <ul className="demo-options">
      <li onClick={props.setDemoContentVar} id="play">
        <FaRegPlayCircle />
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
