// import { useState } from "react";

import "common.css";
import "pages/perks.css";
import { Input } from "components/label_input";

// import { LabelledInput } from "components/labelled_input.js";
// import { LabelledOutput } from "components/labelled_output.js";

// import { round_to_decimal } from "common.js";
// import {
//     calculate_movement_time,
//     calculate_speedy_time_save,
//     calculate_fast_worker_time_save,
// } from "devour.js";

// TODO figure out how to set the background picture absolute when scrolling

export default function Perks() {
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

    const title = <h1>Perk Calculator</h1>;

    const input = (
        <div className="perks_container">
            {Input("Time")}
            {Input("Long Interacts")}
            {Input("Battery Time Loss")}
        </div>
    );

    const divider = <div className="perks_divider" />;

    const info = (
        <div className="perks_column">
            <h1>Perks</h1>
        </div>
    );
    const output = (
        <div className="perks_column">
            <h1>Time Saved</h1>
        </div>
    );

    const perks = (
        <div className="perks_container">
            {info}
            {output}
        </div>
    );

    const content = (
        <>
            {title}
            {input}
            {divider}
            {perks}
        </>
    );

    return content;
}
