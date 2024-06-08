import { useState } from "react";

import "common.css";
import "pages/perks.css";
import icon_speedy from "resources/speedy.jpg";
import icon_faster_worker from "resources/faster_worker.jpg";
import icon_supercharged from "resources/supercharged.jpg";

import { UnsignedFloatInput } from "components/input";

import { round_to_decimal } from "common.js";
import {
    calculate_movement_time,
    calculate_speedy_time_save,
    calculate_fast_worker_time_save,
} from "devour.js";

// // Calculations

// console.log("time: ", time);
// console.log("movementTime: ", movementTime);
// console.log("speedyTimeSave: ", speedyTimeSave);
// console.log("fastWorkerTimeSave: ", fastWorkerTimeSave);

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



function Input(title, value, set_value) {
    return (
        <div className="perks_input">
            <label>{title}</label>
            {UnsignedFloatInput(value, set_value)}
            <span class="underline"></span>
        </div>
    );
}


function Output(value) {
    return (
        <div className="perks_column_item_container">
            <div className="perks_output_container">
                <h1>{value}</h1>
            </div>
        </div>
    );
}

function Perk(logo, name = "name", description = "description") {
    return (
        <div className="perks_column_item_container">
            <div className="perks_perk_logo_container">
                <img
                    src={logo}
                    alt="Logo"
                    className="perks_image"
                    draggable="false"
                ></img>
            </div>
            <div className="perks_perk_info_container">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Perks() {

    // State
    const [time, setTime] = useState(810);
    const [longInteracts, setLongInteracts] = useState(20);
    const [batteryTimeLoss, setBatteryTimeLoss] = useState(50)

    // Options
    const [movementPercent, setMovementPercent] = useState(100);
    const [longInteractDuration, setLongInteractDuration] = useState(8);
    const [speedyIncreasePercent, setSpeedyIncreasePercent] = useState(7);
    const [fastWorkerIncreasePercent, setFastWorkerIncreasePercent] =
        useState(50);
    const [superchargedIncreasePercent, setSuperchargedIncreasePercent] =
        useState(30);
    const [superChargeTime, setSuperChargeTime] = useState(20);


    // Sections
    const title = <h1>Perk Calculator</h1>;

    const input = (
        <div className="perks_container">
            {Input("Time", time, setTime)}
            {Input("Long Interacts", longInteracts, setLongInteracts)}
            {Input("Battery Time Loss", batteryTimeLoss, setBatteryTimeLoss)}
        </div>
    );

    const info = (
        <div className="perks_column">
            <h1>Perks</h1>
            {Perk(icon_speedy, "Speedy", "Movement speed increased by 7%")}
            {Perk(icon_faster_worker, "Fast Worker", "Long interacts are 50% faster")}
            {/* {Perk(icon_supercharged, "Supercharged", "Movement speed increased by 30% for 20 seconds after using a battery")} */}
        </div>
    );


    const movementTime = calculate_movement_time(
        time,
        movementPercent,
        longInteracts,
        longInteractDuration
    );
    const speedyTimeSave = calculate_speedy_time_save(
        movementTime,
        speedyIncreasePercent
    );
    const fastWorkerTimeSave = calculate_fast_worker_time_save(
        fastWorkerIncreasePercent,
        longInteracts,
        longInteractDuration
    );

    const time_saved = (
        <div className="perks_column">
            <h1>Time Saved</h1>
            {Output(round_to_decimal(speedyTimeSave))}
            {Output(round_to_decimal(fastWorkerTimeSave))}
            {/* {Output(superChargeTimeSave)} */}
        </div>
    );

    const perks = (
        <div className="perks_container">
            {info}
            {time_saved}
        </div>
    );

    const content = (
        <>
            {title}
            {input}
            {perks}
        </>
    );

    return content;
}
