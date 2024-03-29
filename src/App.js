import { useState } from 'react';

import logo from './devour_logo.svg';
import './App.css';

import { LabelledInput } from './components/labelled_input.js';
import { LabelledOutput } from './components/labelled_output.js';

import { round_to_decimal } from './common.js';
import { calculate_movement_time, calculate_speedy_time_save, calculate_fast_worker_time_save, calculate_batteries_required_for_supercharged_to_match_speedy } from './devour.js'

function App() {

  // State
  const [time, setTime] = useState(810);
  const [movementPercent, setMovementPercent] = useState(100);

  const [longInteracts, setLongInteracts] = useState(20);
  const [longInteractDuration, setLongInteractDuration] = useState(8);

  const [speedyIncreasePercent, setSpeedyIncreasePercent] = useState(7);
  const [fastWorkerIncreasePercent, setFastWorkerIncreasePercent] = useState(50);

  const [superchargedIncreasePercent, setSuperchargedIncreasePercent] = useState(30);
  const [superChargeTime, setSuperChargeTime] = useState(20);

  // Calculations
  const movementTime = calculate_movement_time(time, movementPercent, longInteracts, longInteractDuration);

  const speedyTimeSave = calculate_speedy_time_save(movementTime, speedyIncreasePercent);

  const fastWorkerTimeSave = calculate_fast_worker_time_save(fastWorkerIncreasePercent, longInteracts, longInteractDuration);

  const batteriesRequired = calculate_batteries_required_for_supercharged_to_match_speedy(
    movementTime,
    speedyIncreasePercent,
    superchargedIncreasePercent,
    superChargeTime,
  );

  console.log("time: ", time);
  console.log("movementTime: ", movementTime);
  console.log("speedyTimeSave: ", speedyTimeSave);
  console.log("fastWorkerTimeSave: ", fastWorkerTimeSave);
  console.log("batteriesRequired: ", batteriesRequired);

  // Components
  const input = [
    LabelledInput("Time", time, setTime),
    LabelledInput("Long Interacts", longInteracts, setLongInteracts),
  ];

  const round_decimal = 1;
  const output = [
    LabelledOutput("Speedy Time Save", round_to_decimal(speedyTimeSave, round_decimal)),
    LabelledOutput("Fast Worker Time Save", round_to_decimal(fastWorkerTimeSave, round_decimal)),
    LabelledOutput("Batteries Required", round_to_decimal(batteriesRequired, round_decimal)),
  ];

  const options = [
    LabelledInput("Movement Percent", movementPercent, setMovementPercent),
    LabelledInput("Long Interact Duration", longInteractDuration, setLongInteractDuration),
    LabelledInput("Speedy Increase Percent", speedyIncreasePercent, setSpeedyIncreasePercent),
    LabelledInput("Fast Worker Increase Percent", fastWorkerIncreasePercent, setFastWorkerIncreasePercent),
    LabelledInput("Supercharged Increase Percent", superchargedIncreasePercent, setSuperchargedIncreasePercent),
    LabelledInput("Supercharge Time", superChargeTime, setSuperChargeTime),
  ];


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming soon, tools for devour speedrunning.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/@Affinity001/videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Speedy Runs
        </a>
      </header>
      <>{input}</>
      <>{output}</>
      {/* <>{options}</> */}
    </div>
  );
}

export default App;
