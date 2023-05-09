const Question1 = (props) => {
  return (
    <div id="question1">
      <p>
        1. What are three popular usecases for online learning applications?
      </p>
      <ul className="answer-set">
        <li className="option">
          <div
            className="radial-click"
            style={{
              border: "1px solid #ccc",
              height: "18px",
              width: "18px",
              borderRadius: "9px",
            }}
          ></div>
          <label for="option-1">A. option-1</label>
        </li>
        <li className="option">
          <div
            className="radial-click"
            style={{
              border: "1px solid #ccc",
              height: "18px",
              width: "18px",
              borderRadius: "9px",
            }}
          ></div>
          <label for="option-2">B. option-2</label>
        </li>
        <li className="option">
          <div
            className="radial-click"
            style={{
              border: "1px solid #ccc",
              height: "18px",
              width: "18px",
              borderRadius: "9px",
            }}
          ></div>
          <label for="option-3">C. option-3</label>
        </li>
        <li className="option">
          <div
            className="radial-click"
            style={{
              border: "1px solid #ccc",
              height: "18px",
              width: "18px",
              borderRadius: "9px",
            }}
          ></div>
          <label for="option-4">D. option-4</label>
        </li>
      </ul>
    </div>
  );
};
export default Question1;
