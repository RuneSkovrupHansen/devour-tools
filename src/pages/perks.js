import { useState } from "react";

import "common.css";
import "pages/perks.css";
import icon_speedy from "resources/speedy.jpg";
import icon_faster_worker from "resources/faster_worker.jpg";
import icon_supercharged from "resources/supercharged.jpg";

import { UnsignedFloatInput } from "components/input";

import { get_screen_width, round_to_decimal } from "common.js";
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

class Perk {
    constructor(name, description, icon) {
        this.name = name;
        this.description = description;
        this.icon = icon;
    }
}

const perk_speedy = new Perk(
    "Speedy",
    "Movement speed increased by 7%",
    icon_speedy
);
const perk_fast_worker = new Perk(
    "Fast Worker",
    "Long interacts are 50% faster",
    icon_faster_worker
);
const perk_supercharged = new Perk(
    "Supercharged",
    "Movement speed increased by 30% for 20 seconds after using a battery",
    icon_supercharged
);

function Input(title, value, set_value, placeholder) {
    return (
        <div className="perks_input">
            <h2>{title}</h2>
            {UnsignedFloatInput(value, set_value, placeholder)}
        </div>
    );
}

function Output(value, green = false) {
    return (
        <div className="perks_column_item_container">
            <div className="perks_output_container">
                <h2 className={green ? "perks_green_text" : ""}>{value}s</h2>
            </div>
        </div>
    );
}

function PerkDisplay(perk) {
    const hide_info = get_screen_width() < 450;

    const alt = `${perk.name} perk icon`;
    const icon = (
        <div className="perks_perk_icon_container">
            <img
                src={perk.icon}
                alt={alt}
                className="perks_icon"
                draggable="false"
            ></img>
        </div>
    );

    const info = (
        <div className="perks_perk_info_container">
            <h3>{perk.name}</h3>
            <p>{perk.description}</p>
        </div>
    );

    let container_class_name = "perks_column_item_container";
    if (hide_info) {
        container_class_name += " perks_center";
    }

    return (
        <div className={container_class_name}>
            {icon}
            {hide_info ? null : info}
        </div>
    );
}

export default function Perks() {
    // State
    const [time, setTime] = useState("");
    const [longInteracts, setLongInteracts] = useState("");
    const [batteryTimeLoss, setBatteryTimeLoss] = useState("");

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
            {Input("Time [s]", time, setTime, "Seconds")}
            {Input("Long Interacts [#]", longInteracts, setLongInteracts, "#")}
            {Input(
                "Battery Time Loss [s]",
                batteryTimeLoss,
                setBatteryTimeLoss,
                "Seconds"
            )}
        </div>
    );

    const info = (
        <div className="perks_column">
            <h2>Perks</h2>
            {PerkDisplay(perk_speedy)}
            {PerkDisplay(perk_fast_worker)}
            {PerkDisplay(perk_supercharged)}
        </div>
    );

    const movementTime = calculate_movement_time(
        time,
        movementPercent,
        longInteracts,
        longInteractDuration
    );

    const speedyTimeSave = Math.max(
        calculate_speedy_time_save(movementTime, speedyIncreasePercent),
        0
    );

    const fastWorkerTimeSave = calculate_fast_worker_time_save(
        fastWorkerIncreasePercent,
        longInteracts,
        longInteractDuration
    );

    const time_saved = (
        <div className="perks_column">
            <h2>Time Saved</h2>
            {Output(
                round_to_decimal(speedyTimeSave),
                speedyTimeSave > fastWorkerTimeSave
            )}
            {Output(
                round_to_decimal(fastWorkerTimeSave),
                fastWorkerTimeSave > speedyTimeSave
            )}
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
