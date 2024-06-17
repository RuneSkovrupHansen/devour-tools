import { useState } from "react";

import "common.css";
import "pages/perks.css";
import icon_speedy from "resources/speedy.jpg";
import icon_faster_worker from "resources/faster_worker.jpg";
import icon_supercharged from "resources/supercharged.jpg";

import { PositiveFloatInput, Input as Input_ } from "components/input";

import { get_screen_width, round_to_decimal } from "common.js";
import {
    calculate_movement_time,
    calculate_speedy_time_save,
    calculate_fast_worker_time_save,
} from "devour.js";

function Input(title, value, set_value, placeholder, tooltip) {
    return Input_(
        PositiveFloatInput(value, set_value, placeholder), title, tooltip
    )
}

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

function PerkDisplay(perk) {
    const hide_info = get_screen_width() < 400;

    const alt = `${perk.name} perk icon`;
    const icon = (
        <div className="perks_perk_icon_container">
            <img
                src={perk.icon}
                alt={alt}
                className="image_fit_parent perks_icon_border"
                draggable="false"
                title="Test"
            ></img>
        </div>
    );

    const info = (
        <div className="perks_perk_info_container">
            <h3>{perk.name}</h3>
            <p className="perks_description">{perk.description}</p>
        </div>
    );

    let container_class_name = "perks_perk_container";
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

function Output(value, unit = "", green = false) {
    return (
        <h2 className={green ? "perks_green_text" : ""}>
            {value}
            {unit}
        </h2>
    );
}

function Divider() {
    return <span className="perks_divider" />;
}

export default function Perks() {
    // State
    const [time, setTime] = useState("");
    const [longInteracts, setLongInteracts] = useState("");

    const [movementPercent, setMovementPercent] = useState(100);
    const [longInteractDuration, setLongInteractDuration] = useState(8);
    const [speedyIncreasePercent, setSpeedyIncreasePercent] = useState(7);
    const [fastWorkerIncreasePercent, setFastWorkerIncreasePercent] =
        useState(50);
    const [superchargedIncreasePercent, setSuperchargedIncreasePercent] =
        useState(30);
    const [superChargeTime, setSuperChargeTime] = useState(20);

    // Sections
    // Input
    const title = <h1>Perk Calculator</h1>;

    // Time saved
    const time_saved_input = (
        <div className="perks_container">
            {Input("Game Length", time, setTime, "Seconds", "The total length of the game in seconds")}
            {Input("Long Interacts", longInteracts, setLongInteracts, "#", "The total number of long interacts performed in the game")}
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

    const time_saved_output = (
        <div className="column">
            <div className="row">
                <div className="column">
                    <h2>Perk</h2>
                </div>
                <div className="column">
                    <h2>Time Saved</h2>
                </div>
            </div>

            <div className="row perks_row">
                {PerkDisplay(perk_speedy)}
                <div className="column">
                    {Output(
                        round_to_decimal(speedyTimeSave),
                        "s",
                        speedyTimeSave > fastWorkerTimeSave
                    )}
                </div>
            </div>

            {Divider()}

            <div className="row perks_row">
                {PerkDisplay(perk_fast_worker)}
                <div className="column">
                    {Output(
                        round_to_decimal(fastWorkerTimeSave),
                        "s",
                        fastWorkerTimeSave > speedyTimeSave
                    )}
                </div>
            </div>
        </div>
    );

    const time_saved = (
        <>
            {time_saved_input}
            {time_saved_output}
        </>
    );

    // Notes

    const notes = (
        <div className="column perks_info_column">
            <h2>Notes</h2>
            <p>
                The time you save with the Speedy perk depends on the assumption
                that you're constantly moving, except when you're performing
                long interacts.
            </p>
        </div>
    );

    // Battery Time Loss is the average estimated time loss from picking up a battery.

    const content = (
        <>
            {title}
            {time_saved}
            {notes}
        </>
    );

    return content;
}
