const Question1 = (props) => {
  return (
    <div class="question" id="question1">
      <p>
        1. What are three popular usecases for online learning applications?
      </p>
      <ul className="answer-set">
        <li className="option">
          <div
            className="radial-click"
            data-question="question1"
            data-answer="a"
          ></div>
          <label for="option-1">
            A. employee prescreening, on the job training, compliance training
          </label>
        </li>
        <li className="option">
          <div
            className="radial-click"
            data-question="question1"
            data-answer="b"
          ></div>
          <label for="option-2">
            B. tax preparation, estate planning, legal service
          </label>
        </li>
        <li className="option">
          <div
            className="radial-click"
            data-question="question1"
            data-answer="c"
          ></div>
          <label for="option-3">
            C. drywall installation, window installation, roofing
          </label>
        </li>
        <li className="option">
          <div
            className="radial-click"
            data-question="question1"
            data-answer="d"
          ></div>
          <label for="option-4">D. All of the above</label>
        </li>
      </ul>
    </div>
  );
};
export default Question1;
