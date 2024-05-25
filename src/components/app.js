import { useState } from 'react';

import 'css/app.css';
import "css/common.css"

import { Header } from './header.js';
import { Content } from './content.js';
import { Footer } from './footer.js';
import { LabelledInput } from './labelled_input.js';
import { LabelledOutput } from './labelled_output.js';

import { round_to_decimal } from '../common.js';
import { calculate_movement_time, calculate_speedy_time_save, calculate_fast_worker_time_save } from '../devour.js'

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

  console.log("time: ", time);
  console.log("movementTime: ", movementTime);
  console.log("speedyTimeSave: ", speedyTimeSave);
  console.log("fastWorkerTimeSave: ", fastWorkerTimeSave);

  // Components
  const input = [
    LabelledInput("Time", time, setTime),
    LabelledInput("Long Interacts", longInteracts, setLongInteracts),
  ];

  const round_decimal = 1;
  const output = [
    LabelledOutput("Speedy Time Save", round_to_decimal(speedyTimeSave, round_decimal)),
    LabelledOutput("Fast Worker Time Save", round_to_decimal(fastWorkerTimeSave, round_decimal)),
  ];

  const options = [
    LabelledInput("Movement Percent", movementPercent, setMovementPercent),
    LabelledInput("Long Interact Duration", longInteractDuration, setLongInteractDuration),
    LabelledInput("Speedy Increase Percent", speedyIncreasePercent, setSpeedyIncreasePercent),
    LabelledInput("Fast Worker Increase Percent", fastWorkerIncreasePercent, setFastWorkerIncreasePercent),
    LabelledInput("Supercharged Increase Percent", superchargedIncreasePercent, setSuperchargedIncreasePercent),
    LabelledInput("Supercharge Time", superChargeTime, setSuperChargeTime),
  ];

  // Header
  const header = Header()

  // Content
  const content_content = <>content - Devour Tools!</>
  const content = Content(content_content)

  // Footer
  const footer = Footer()

  return (
    <div className="wrapper">
      <>{header}</>
      <>{content}</>
      <>{footer}</>
    </div >
  );
}

export default App;
