import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Question1 from "./quiz-questions/question1";
import Question2 from "./quiz-questions/question2";

const Exam = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const selectQuestion = (index) => {
    let output = <Question1 />;
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

  const CurrentQuestion = () => selectQuestion(questionIndex);
  return (
    <div id="elearning-exam">
      <div class="overlay">
        <h4>WPK Digital Solutions Elearning Demo Exam</h4>
        <h1>Review Questions</h1>
        <hr />
        <CurrentQuestion />
        <hr />
        <div class="exam-nav d-flex flex-row justify-content-between align-items-center">
          <div class="">
            <span>
              <FaArrowLeft /> prev
            </span>
          </div>
          <div class="">
            <button class="btn btn-primary">submit</button>
          </div>
          <div class="">
            <span>
              next <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
