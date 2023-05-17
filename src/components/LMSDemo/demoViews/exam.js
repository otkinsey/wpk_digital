import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Question1 from "./quiz-questions/question1";
import Question2 from "./quiz-questions/question2";

const Exam = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const selectQuestion = (index) => {
    let output;
    switch (index) {
      case 1:
        output = <Question2 />;
        break;
      default:
        output = <Question1 />;
        break;
    }
    return output;
  };

  useEffect(() => {
    const radialButtons = Array.from(
      document.getElementsByClassName("radial-click")
    );
    radialButtons.forEach((button) =>
      button.addEventListener("click", (e) => {
        radialButtons.forEach((button) => button.classList.remove("active"));
        e.target.classList.add("active");
      })
    );
  }, []);

  const incrementIndex = () => {
    return questionIndex >= 1 ? 1 : setQuestionIndex(questionIndex + 1);
  };
  const decrementIndex = () => {
    return questionIndex <= 0 ? 0 : setQuestionIndex(questionIndex - 1);
  };

  let CurrentQuestion = () => selectQuestion(questionIndex);

  return (
    <div id="elearning-exam">
      <div className="overlay">
        <h4>WPK Digital Solutions Elearning Demo Exam</h4>
        <h1>Review Questions</h1>
        <hr />
        <CurrentQuestion />
        <hr />
        <div className="exam-nav d-flex flex-row justify-content-between align-items-center">
          <span className="exam-nav" onClick={decrementIndex}>
            <FaArrowLeft /> prev
          </span>
          <div className="">
            <button className="btn btn-primary">submit</button>
          </div>
          <span className="exam-nav" onClick={incrementIndex}>
            next <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Exam;
