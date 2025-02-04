//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import TopRow from './TopRow';
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const resetGame = () => {
    setHomeScore(0);
    setAwayScore(0);
    setQuarter(1);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />

        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => { setHomeScore(homeScore + 7) }}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => { setHomeScore(homeScore + 3) }}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => { setAwayScore(awayScore + 7) }}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => { setAwayScore(awayScore + 3) }}>Away Field Goal</button>
        </div>
        <div className='bottomRowButtons'>
          <button className='nextQuarter' onClick={() => { if (quarter < 4) { setQuarter(quarter + 1) } }}>Next Quarter</button>
          <button className='newGame' onClick={resetGame}> New Game </button>
        </div>
      </section >
    </div >
  );
}

export default App;