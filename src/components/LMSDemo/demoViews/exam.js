import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Question1 from "./quiz-questions/question1";
import Question2 from "./quiz-questions/question2";

const Exam = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correct, setCorrect] = useState(null);

  const incrementIndex = () => {
    return questionIndex >= 1 ? 1 : setQuestionIndex(questionIndex + 1);
  };
  const decrementIndex = () => {
    return questionIndex <= 0 ? 0 : setQuestionIndex(questionIndex - 1);
  };

  let CurrentQuestion = () => selectQuestion(questionIndex);

  const correctAnswers = ["a", "a"];

  const questions = ["question1", "question2"];

  const saveAnswer = (question, value) => {
    localStorage.setItem(question, value);
  };

  const processAnswers = () => {
    const submittedAnswers = questions.map((q) => localStorage.getItem(q));

    const comparedAnswers = submittedAnswers.map(
      (answer) =>
        // correctAnswers.includes(answer)
        true
    );
    saveAnswer(
      questions[questionIndex],
      localStorage.getItem(`question${questionIndex}`)
    );
    if (questionIndex < 1) {
      incrementIndex();
      return null;
    } else {
      setCorrect(true);
      return true;
    }
  };

  const selectQuestion = (index) => {
    let output;
    switch (index) {
      case 1:
        output = <Question2 saveAnswer={saveAnswer} />;
        break;
      default:
        output = <Question1 saveAnswer={saveAnswer} />;
        break;
    }
    return output;
  };

  useEffect(() => {
    const radialButtons = Array.from(
      document.getElementsByClassName("radial-click")
    );

    const processClick = (e) => {
      radialButtons.forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");
    };

    radialButtons.forEach((button) => {
      button.removeEventListener("click", processClick);
      button.addEventListener("click", processClick);
    });
  }, [questionIndex]);

  return (
    <div id="elearning-exam">
      <div className="overlay">
        <h4>WPK Digital Solutions Elearning Demo Exam</h4>
        <h1>Review Questions</h1>
        <hr />
        {correct === true && questionIndex >= 1 ? (
          <h3>Congratulations! You have passed.</h3>
        ) : (
          <CurrentQuestion />
        )}

        <hr />
        <div className="exam-nav d-flex flex-row justify-content-between align-items-center">
          <span className="exam-nav" onClick={decrementIndex}>
            <FaArrowLeft /> prev
          </span>
          <div className="">
            <button className="btn btn-primary" onClick={processAnswers}>
              submit
            </button>
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
