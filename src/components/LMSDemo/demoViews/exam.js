import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Question1 from "./quiz-questions/question1";
import Question2 from "./quiz-questions/question2";

const Exam = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correct, setCorrect] = useState(null);

  const incrementIndex = () => {
    let value = questionIndex >= 1 ? 1 : setQuestionIndex(questionIndex + 1);
    setCorrect(null);
    return value;
  };
  const decrementIndex = () => {
    let value = questionIndex <= 0 ? 0 : setQuestionIndex(questionIndex - 1);
    setCorrect(null);
    return value;
  };

  let CurrentQuestion = () => selectQuestion(questionIndex);

  const correctAnswers = ["a", "true"];

  const questions = ["question1", "question2"];

  const saveAnswer = (question, value) => {
    localStorage.setItem(question, value);
  };

  const assessmentMessage =
    correct === true
      ? "Congratulations! You have passed."
      : "Sorry. Please review your answers.";

  const processAnswers = () => {
    const submittedAnswers = questions.map((q) => localStorage.getItem(q));

    const comparedAnswers = submittedAnswers.map((answer) =>
      correctAnswers.includes(answer)
    );

    /**
     * Otherwise, if user is on last question, ie. question index
     * is questions.length-1, do the following:
     * 1. compare subitted questions to correctAnswers
     * 2. display the appropriate message based on result
     */
    if (questionIndex === 1) {
      const assessment = submittedAnswers.map((a) =>
        correctAnswers.includes(a)
      );
      assessment.includes(false) ? setCorrect(false) : setCorrect(true);
      return correct;
    } else if (questionIndex < questions.length) {
      /**
       * If user is not on last question, increment question index
       * and display the next question
       */
      incrementIndex();
      setCorrect(null);
      return correct;
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

  useEffect(() => localStorage.clear(), []);

  useEffect(() => {
    const radialButtons = Array.from(
      document.getElementsByClassName("radial-click")
    );

    const processClick = (e) => {
      radialButtons.forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");

      const question = e.target.getAttribute("data-question");
      const answer = e.target.getAttribute("data-answer");

      saveAnswer(question, answer);
    };

    radialButtons.forEach((button) => {
      button.removeEventListener("click", processClick);
      button.addEventListener("click", processClick);
    });
  }, [questionIndex, correct]);

  return (
    <div id="elearning-exam">
      <div className="overlay">
        <h4>WPK Digital Solutions Elearning Demo Exam</h4>
        <h1>Review Questions</h1>
        <hr />
        {correct === null ? <CurrentQuestion /> : <h3>{assessmentMessage}</h3>}
        <hr />
        <div className="exam-nav d-flex flex-row justify-content-between align-items-center">
          <span className="exam-nav" onClick={decrementIndex}>
            <FaArrowLeft /> prev
          </span>
          <div className="">
            <button className="btn btn-primary" onClick={processAnswers}>
              Submit
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
