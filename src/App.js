//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import TopRow from './TopRow';
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  {/* Trying to get the button "New Game" to reset board. Whenever another button other than "New Game" is pushed, the homeScore, awayScore and Quarter boxes all collapse and you cannot see the numbers. Unsure why this is happening*/ }
  const initialState = {
    homeScore: 0,
    awayScore: 0,
    quarter: 1
  }
  const [{ homeScore, awayScore, quarter }, setState] = useState(initialState)

  // const [homeScore, setHomeScore] = useState(0);
  // const [awayScore, setAwayScore] = useState(0);
  // const [quarter, setQuarter] = useState(1);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />

        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => { setState(homeScore + 7) }}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => { setState(homeScore + 3) }}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => { setState(awayScore + 7) }}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => { setState(awayScore + 3) }}>Away Field Goal</button>
        </div>
        <div className='bottomRowButtons'>
          <button className='nextQuarter' onClick={() => { if (quarter < 4) { setState(quarter + 1) } }}>Next Quarter</button>
          <button className='newGame' onClick={() => { setState(initialState) }}> New Game </button>
        </div>
      </section >
    </div >
  );
}

export default App;