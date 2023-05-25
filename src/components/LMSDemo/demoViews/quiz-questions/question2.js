const Question2 = (props) => {
  return (
    <div class="question" id="Question2">
      <p>
        2. Was the content of this demo helpful in explaining our elearning
        development service?
      </p>
      <ul className="answer-set">
        <li className="option">
          <div
            className="radial-click"
            onClick={() => {
              props.saveAnswer("question1", "a");
            }}
          ></div>
          <label for="option-1">A. Yes! Very helpful.</label>
        </li>
        <li className="option">
          <div
            className="radial-click"
            onClick={() => {
              props.saveAnswer("question1", "b");
            }}
          ></div>
          <label for="option-2">B. Sort of helpful.</label>
        </li>
        <li className="option">
          <div
            className="radial-click"
            onClick={() => {
              props.saveAnswer("question1", "c");
            }}
          ></div>
          <label for="option-3">C. Not helpful.</label>
        </li>
      </ul>
    </div>
  );
};
export default Question2;
