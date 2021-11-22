import { Route, Routes } from "react-router";
import React, { useState } from "react";
import "./App.css";
import * as PATHS from "./utils/paths";
import Navbar from "./components/Navbar/Navbar";
import LowBar from "./components/LowBar/LowBar";
import HomePage from "./views/Homepage";
import Quizz from "./views/Quizz";
import Result from "./views/Result";

function App() {
  const [totalScore, setTotalScore] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path={PATHS.HOMEPAGE} element={<HomePage />} />
        <Route
          exact
          path={PATHS.QUIZZ}
          element={
            <Quizz totalScore={totalScore} setTotalScore={setTotalScore} />
          }
        />
        <Route
          exact
          path={PATHS.RESULTS}
          element={
            <Result totalScore={totalScore} setTotalScore={setTotalScore} />
          }
        />
      </Routes>
      <LowBar />
    </div>
  );
}

export default App;
