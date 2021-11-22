import React, { useEffect, useState } from "react";
import esgrima2 from "../images/esgrima2.jpg";
import profile from "../data/main.json";
import Main from "../components/Main/Main";

function Result({ totalScore, setTotalScore }) {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (totalScore === 10) {
      setResult(1);
      setIsLoading(false);
    } else if (totalScore === 8 || totalScore === 9) {
      setResult(2);
      setIsLoading(false);
    } else if (totalScore >= 5 && totalScore <= 7) {
      setResult(3);
      setIsLoading(false);
    } else {
      setResult(4);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="result-container">
      <img src={esgrima2} alt="Esgrimista" className="quizz-pic" />
      {isLoading && <h1>...loading</h1>}
      {!isLoading && (
        <div className="result-main">
          <div>
            <Main data={profile[result]} setTotalScore={setTotalScore} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
