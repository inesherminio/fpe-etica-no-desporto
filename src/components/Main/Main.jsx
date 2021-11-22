import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Main.css";
import * as PATHS from "../../utils/paths";

function Main({
  data: {
    title,
    description,
    mainButton: { mainText, mainColor, mainTextColor },
    secondaryButton: { secondaryText, secondaryColor, secondaryTextColor },
  },
  setTotalScore,
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleRedirect = (action) => {
    if (pathname === "/") {
      navigate(PATHS.QUIZZ);
    } else if (action === "back") {
      setTotalScore(0);
      navigate(PATHS.HOMEPAGE);
    } else {
      setTotalScore(0);
      navigate(PATHS.QUIZZ);
    }
  };

  return (
    <div>
      <h1 className="main__title">{title}</h1>
      <p
        className={
          pathname === "/resultado"
            ? "main__description-result"
            : "main__description"
        }
      >
        {description}
      </p>
      <button
        onClick={() => handleRedirect("back")}
        style={{ color: mainTextColor, backgroundColor: mainColor }}
        className="btn"
      >
        {mainText}
      </button>
      {secondaryText.length > 0 && (
        <button
          onClick={() => handleRedirect("retake")}
          style={{ color: secondaryTextColor, backgroundColor: secondaryColor }}
          className="btn"
        >
          {secondaryText}
        </button>
      )}
    </div>
  );
}

export default Main;
