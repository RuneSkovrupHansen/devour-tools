import { useState } from "react";

import "common.css";
import "pages/perks.css";
import NumericInput from "components/number_input";
import NumericInputPass from "components/number_input_pass";
import NumericInputPassAll from "components/number_input_pass_all";
import RegexInput from "components/number_input_pass_all";

// import { LabelledInput } from "components/labelled_input.js";
// import { LabelledOutput } from "components/labelled_output.js";

// import { round_to_decimal } from "common.js";
// import {
//     calculate_movement_time,
//     calculate_speedy_time_save,
//     calculate_fast_worker_time_save,
// } from "devour.js";

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


function output(value) {
    return (
        <div className="perks_column_item_container">
            <div className="perks_output_container">
                <h1>{value}</h1>
            </div>
        </div>
    );
}

function perk() {
    return (
        <div className="perks_column_item_container">
            <div className="perks_perk_logo_container"></div>
            <div className="perks_perk_info_container"></div>
        </div>
    );
}

export default function Perks() {

    // const title = <h1>Perk Calculator</h1>;

    // const [value, setValue] = useState();

    // const input = (
    //     <div className="perks_container">
    //         {Input("Time", 0)}
    //         {Input("Long Interacts", 0)}
    //         {UnsignedFloatInput(value, setValue)}
    //         {Input("Battery Time Loss", 0)}
    //     </div>
    // );

    // const info = (
    //     <div className="perks_column">
    //         <h1>Perks</h1>
    //         {perk()}
    //         {perk()}
    //         {perk()}
    //     </div>
    // );
    // const output_ = (
    //     <div className="perks_column">
    //         <h1>Time Saved</h1>
    //         {output("Value 1")}
    //         {output("Value 2")}
    //         {output("Value 3")}
    //     </div>
    // );

    // const perks = (
    //     <div className="perks_container">
    //         {info}
    //         {output_}
    //     </div>
    // );

    // const content = (
    //     <>
    //         {title}
    //         {input}
    //         {perks}
    //     </>
    // );

    const [value1, setValue1] = useState(0)

    const [value2, setValue2] = useState(0)

    const [value3, setValue3] = useState("")

    let content = <>
        {NumericInput(setValue1)}
        <p>{value1}</p>
        {NumericInputPass(value2, setValue2)}
        <p>{value2}</p>
        {RegexInput(value3, setValue3, /^[0-9]*\.?[0-9]*$/)}
        <p>{value3}</p>
    </>

    return content;
}
