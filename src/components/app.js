// import { useState } from "react";

import "components/app.css";
import "common.css";

import { Header } from "components/header.js";
import { Content } from "components/content.js";
import { Footer } from "components/footer.js";
// import { LabelledInput } from "components/labelled_input.js";
// import { LabelledOutput } from "components/labelled_output.js";

// import { round_to_decimal } from "common.js";
// import {
//     calculate_movement_time,
//     calculate_speedy_time_save,
//     calculate_fast_worker_time_save,
// } from "devour.js";

// TODO figure out how to set the background picture absolute when scrolling

function App() {
    // // State
    // const [time, setTime] = useState(810);
    // const [movementPercent, setMovementPercent] = useState(100);

    // const [longInteracts, setLongInteracts] = useState(20);
    // const [longInteractDuration, setLongInteractDuration] = useState(8);

    // const [speedyIncreasePercent, setSpeedyIncreasePercent] = useState(7);
    // const [fastWorkerIncreasePercent, setFastWorkerIncreasePercent] =
    //     useState(50);

    // const [superchargedIncreasePercent, setSuperchargedIncreasePercent] =
    //     useState(30);
    // const [superChargeTime, setSuperChargeTime] = useState(20);

    // // Calculations
    // const movementTime = calculate_movement_time(
    //     time,
    //     movementPercent,
    //     longInteracts,
    //     longInteractDuration
    // );

    // const speedyTimeSave = calculate_speedy_time_save(
    //     movementTime,
    //     speedyIncreasePercent
    // );

    // const fastWorkerTimeSave = calculate_fast_worker_time_save(
    //     fastWorkerIncreasePercent,
    //     longInteracts,
    //     longInteractDuration
    // );

    // console.log("time: ", time);
    // console.log("movementTime: ", movementTime);
    // console.log("speedyTimeSave: ", speedyTimeSave);
    // console.log("fastWorkerTimeSave: ", fastWorkerTimeSave);

    // // Components
    // const input = [
    //     LabelledInput("Time", time, setTime),
    //     LabelledInput("Long Interacts", longInteracts, setLongInteracts),
    // ];

    // const round_decimal = 1;
    // const output = [
    //     LabelledOutput(
    //         "Speedy Time Save",
    //         round_to_decimal(speedyTimeSave, round_decimal)
    //     ),
    //     LabelledOutput(
    //         "Fast Worker Time Save",
    //         round_to_decimal(fastWorkerTimeSave, round_decimal)
    //     ),
    // ];

    // const options = [
    //     LabelledInput("Movement Percent", movementPercent, setMovementPercent),
    //     LabelledInput(
    //         "Long Interact Duration",
    //         longInteractDuration,
    //         setLongInteractDuration
    //     ),
    //     LabelledInput(
    //         "Speedy Increase Percent",
    //         speedyIncreasePercent,
    //         setSpeedyIncreasePercent
    //     ),
    //     LabelledInput(
    //         "Fast Worker Increase Percent",
    //         fastWorkerIncreasePercent,
    //         setFastWorkerIncreasePercent
    //     ),
    //     LabelledInput(
    //         "Supercharged Increase Percent",
    //         superchargedIncreasePercent,
    //         setSuperchargedIncreasePercent
    //     ),
    //     LabelledInput("Supercharge Time", superChargeTime, setSuperChargeTime),
    // ];

    // Stylesheets
    const stylesheets = (
        <link
            href="https://fonts.googleapis.com/css?family=Inria Sans"
            rel="stylesheet"
        ></link>
    );

    // Header
    const header = Header();

    // Content
    const content_content = <>content - Devour Tools!</>;
    const content = Content(content_content);

    // Footer
    const footer = Footer();

    return (
        <>
            {stylesheets}
            <div className="app">
                {header}
                {content}
                {footer}
            </div>
        </>
    );
}

export default App;
