import { useState } from "react";

import "common.css";
import "pages/perks.css";
import icon_speedy from "resources/speedy.jpg";
import icon_faster_worker from "resources/faster_worker.jpg";
import icon_supercharged from "resources/supercharged.jpg";

import { UnsignedFloatInput } from "components/input";

import { get_screen_width, hover_span, round_to_decimal } from "common.js";
import {
    calculate_movement_time,
    calculate_speedy_time_save,
    calculate_fast_worker_time_save,
} from "devour.js";

function Input(title, value, set_value, placeholder) {
    return (
        <div className="perks_input_container">
            <h3>{title}</h3>
            {UnsignedFloatInput(value, set_value, placeholder)}
        </div>
    );
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
                className="perks_icon"
                draggable="false"
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

function TimeSaved(value, green = false) {
    return (
        <div className="perks_column_item_container">
            <div className="perks_output_container">
                <h2 className={green ? "perks_green_text" : ""}>{value}s</h2>
            </div>
        </div>
    );
}

function Divider() {
    return <span className="perks_divider" />;
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

    const [hoverGameLength, setHoverGameLength] = useState(false);
    const [hoverLongInteracts, setHoverLongInteracts] = useState(false);
    const [hoverBatteryTimeLoss, setHoverBatteryTimeLoss] = useState(false);

    // Highlights

    const game_length_text = hover_span(
        hoverGameLength,
        setHoverGameLength,
        "highlight",
        "Game Length"
    );

    const long_interacts_text = hover_span(
        hoverLongInteracts,
        setHoverLongInteracts,
        "highlight",
        "Long Interacts"
    );

    const battery_time_loss_text = hover_span(
        hoverBatteryTimeLoss,
        setHoverBatteryTimeLoss,
        "highlight",
        "Battery Time Loss"
    );

    // Sections
    const title = <h1>Perk Calculator</h1>;

    const input = (
        <div className="perks_container">
            {Input(game_length_text, time, setTime, "Seconds")}
            {Input(long_interacts_text, longInteracts, setLongInteracts, "#")}
            {Input(
                battery_time_loss_text,
                batteryTimeLoss,
                setBatteryTimeLoss,
                "Seconds"
            )}
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

    const perks = (
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
                    {TimeSaved(
                        round_to_decimal(speedyTimeSave),
                        speedyTimeSave > fastWorkerTimeSave
                    )}
                </div>
            </div>

            {Divider()}

            <div className="row perks_row">
                {PerkDisplay(perk_fast_worker)}
                <div className="column">
                    {TimeSaved(
                        round_to_decimal(fastWorkerTimeSave),
                        fastWorkerTimeSave > speedyTimeSave
                    )}
                </div>
            </div>

            {Divider()}

            <div className="row perks_row">
                {PerkDisplay(perk_supercharged)}
                <div className="column">{/* TODO */}</div>
            </div>
        </div>
    );

    const info = (
        <div className="column perks_info_column">
            <h2>Notes</h2>
            <p>
                {game_length_text} is the total length of the game in seconds.
            </p>
            <p>
                {long_interacts_text} is the total number of long interacts
                performed in the game.
            </p>
            <p>
                {battery_time_loss_text} is the average estimated time loss from
                picking up a battery.
            </p>
            <p>
                The time you save with the Speedy perk depends on the assumption
                that you're constantly moving, except when you're performing
                long interacts.
            </p>
        </div>
    );

    const content = (
        <>
            {title}
            {input}
            {perks}
            {info}
        </>
    );

    return content;
}
