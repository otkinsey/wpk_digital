const Question2 = (props) => {
  return (
    <div class="question" id="Question2">
      <p>
        2. Was the content of this demo helpful in explaining our elearning
        development service?
      </p>
      <ul className="answer-set">
        <li className="option">
          <div className="radial-click"></div>
          <label for="option-1">A. option-1</label>
        </li>
        <li className="option">
          <div className="radial-click"></div>
          <label for="option-2">B. option-2</label>
        </li>
        <li className="option">
          <div className="radial-click"></div>
          <label for="option-3">C. option-3</label>
        </li>
        <li className="option">
          <div className="radial-click"></div>
          <label for="option-4">D. option-4</label>
        </li>
      </ul>
    </div>
  );
};
export default Question2;
