import React, { useState } from "react";
import esgrima2 from "../images/esgrima2.jpg";
import questions from "../data/questions.json";
import { useNavigate } from "react-router";
import * as PATHS from "../utils/paths";

function Quizz({ setTotalScore, totalScore }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [partialScore, setPartialScore] = useState(null);
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();

  const handleChangeQuestion = (direction) => {
    if (direction === "next") {
      setTotalScore(totalScore + partialScore);
      setQuestionNumber(questionNumber + 1);
      setSelected(null);
    } else {
      setTotalScore(totalScore + partialScore);
      navigate(PATHS.RESULTS);
    }
  };

  const handleScore = (choice) => {
    setPartialScore(choice.score);
    setSelected(choice);
  };

  return (
    <div className="quizz-container">
      <img src={esgrima2} alt="Esgrimista" className="quizz-pic" />
      <div className="quizz-main">
        <div className="quizz-main-question">
          {questions[questionNumber].number}.{" "}
          {questions[questionNumber].question}
        </div>
        <div className="quizz-main-answers">
          <div
            className="quizz-main-answer-container"
            onClick={() => handleScore(questions[questionNumber].answers[0])}
            style={{
              backgroundColor:
                selected === questions[questionNumber].answers[0]
                  ? "#E8C0C4"
                  : "#EEEEEE",
              border:
                selected === questions[questionNumber].answers[0]
                  ? "1px solid #C60116"
                  : "1px solid #BFBFBF",
            }}
          >
            <div className="quizz-main-answer quizz-main-answer-line">
              {questions[questionNumber].answers[0].line}
            </div>
            <div className="quizz-main-answer">
              {questions[questionNumber].answers[0].text}
            </div>
          </div>
          <div
            className="quizz-main-answer-container"
            onClick={() => handleScore(questions[questionNumber].answers[1])}
            style={{
              backgroundColor:
                selected === questions[questionNumber].answers[1]
                  ? "#E8C0C4"
                  : "#EEEEEE",
              border:
                selected === questions[questionNumber].answers[1]
                  ? "1px solid #C60116"
                  : "1px solid #BFBFBF",
            }}
          >
            <div className="quizz-main-answer quizz-main-answer-line">
              {questions[questionNumber].answers[1].line}
            </div>
            <div className="quizz-main-answer">
              {questions[questionNumber].answers[1].text}
            </div>
          </div>
          <div
            className="quizz-main-answer-container"
            onClick={() => handleScore(questions[questionNumber].answers[2])}
            style={{
              backgroundColor:
                selected === questions[questionNumber].answers[2]
                  ? "#E8C0C4"
                  : "#EEEEEE",
              border:
                selected === questions[questionNumber].answers[2]
                  ? "1px solid #C60116"
                  : "1px solid #BFBFBF",
            }}
          >
            <div className="quizz-main-answer quizz-main-answer-line">
              {questions[questionNumber].answers[2].line}
            </div>
            <div className="quizz-main-answer">
              {questions[questionNumber].answers[2].text}
            </div>
          </div>
        </div>
        <div className="quizz-main-footer">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${questions[questionNumber].progress}%` }}
              aria-valuenow={questions[questionNumber].progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          {questionNumber < 9 && (
            <button
              onClick={() => handleChangeQuestion("next")}
              type="button"
              className="next-btn"
              disabled={!selected}
            >
              &gt;&gt; Seguinte
            </button>
          )}
          {questionNumber === 9 && (
            <button
              onClick={() => handleChangeQuestion("end")}
              type="button"
              className="btn btn-strong next-btn end-btn"
              disabled={!selected}
            >
              Fim
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quizz;
