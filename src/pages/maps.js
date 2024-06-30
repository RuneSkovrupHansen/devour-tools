import React, { useState } from "react";
import Select from "react-select";

import "common.css";
import "pages/maps.css";

import { Image } from "components/image";
import { ModalWrapper } from "components/modal_wrapper";
import { Color, Spacing } from "common";

// Add lazy loading for images

// Images

import map_farmhouse_overview from "resources/maps/farmhouse_overview.jpg";

import map_asylum_overview_1 from "resources/maps/asylum_overview_1.jpg";
import map_asylum_overview_2 from "resources/maps/asylum_overview_2.jpg";

import map_inn_floor_1 from "resources/maps/inn_floor_1.jpg";
import map_inn_floor_2 from "resources/maps/inn_floor_2.jpg";

import map_town_overview from "resources/maps/town_overview.jpg";

import map_slaughterhouse_basement from "resources/maps/slaughterhouse_basement.jpg";
import map_slaughterhouse_floor_1 from "resources/maps/slaughterhouse_floor_1.jpg";
import map_slaughterhouse_floor_2 from "resources/maps/slaughterhouse_floor_2.jpg";

class MapImage {
    constructor(name, src) {
        this.name = name;
        this.src = src;
    }
}

class Map {
    constructor(name, map_images) {
        this.name = name;
        this.map_images = map_images;
    }
}

const map_farmhouse = new Map("Farmhouse", [
    new MapImage("Overview", map_farmhouse_overview),
]);

const map_asylum = new Map("Asylum", [
    new MapImage("Overview 1", map_asylum_overview_1),
    new MapImage("Overview 2", map_asylum_overview_2),
]);

const map_inn = new Map("Inn", [
    new MapImage("Floor 1", map_inn_floor_1),
    new MapImage("Floor 2", map_inn_floor_2),
]);

const map_town = new Map("Town", [new MapImage("Overview", map_town_overview)]);

const map_slaughterhouse = new Map("Slaughterhouse", [
    new MapImage("Basement", map_slaughterhouse_basement),
    new MapImage("Floor 1", map_slaughterhouse_floor_1),
    new MapImage("Floor 2", map_slaughterhouse_floor_2),
]);

const maps = [map_farmhouse, map_asylum, map_inn, map_town, map_slaughterhouse];

export default function Maps() {
    const title = <h1>Maps</h1>;

    // Set up modal state
    const [modal_is_open, set_modal_is_open] = React.useState(false);
    const [modal_image, set_modal_image] = React.useState();

    // Set up modal content using state as content
    const modal_content = (
        <img className="image_fit_parent" src={modal_image} />
    );

    // Set up modal
    const [openModal, modal] = ModalWrapper(
        modal_is_open,
        set_modal_is_open,
        modal_content
    );

    // Set up wrapper for Image with modal on click
    function ModalImage(src, title) {
        return (
            <Image
                src={src}
                title={title}
                onClick={() => {
                    set_modal_image(src);
                    openModal();
                }}
            />
        );
    }

    const styles = {
        control: (styles, state) => ({
            ...styles,
            backgroundColor: Color.dark_grey,
            borderColor: Color.red,
            boxShadow: "none",
            borderWidth: "0 0 2px",
            borderRadius: "0px",
            "&:hover": {
                borderColor: Color.red, // Sets hover color
            },
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            display: "none",
        }),
        singleValue: (styles) => ({
            ...styles,
            color: Color.white,
        }),
        placeholder: (styles) => ({
            ...styles,
            color: Color.white,
        }),
        option: (styles, { isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? Color.dark_grey : Color.grey,
                color: Color.soft_white,
                cursor: isDisabled ? "not-allowed" : "default",
                borderRadius: "0px",
                margin: "0px",
            };
        },
        menu: (styles) => ({
            ...styles,
            borderRadius: "0px",
            backgroundColor: Color.grey,
            padding: "0px",
            margin: "0px",
        }),
    };

    const options = maps.map((map, index) => ({
        value: index,
        label: map.name,
    }));

    const [index, set_index] = useState(0);

    const maps_selector = (
        <Select
            styles={styles}
            options={options}
            defaultValue={options[index]}
            placeholder={options[index]}
            isSearchable={false}
            onChange={(option) => {
                set_index(option.value);
            }}
        />
    );

    const map_images = maps[index].map_images.map((image) => {
        console.log(image.src, image.name);
        return (
            <li
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: Spacing.medium,
                }}
                key={image.src}
            >
                {ModalImage(image.src, image.name)}
            </li>
        );
    });

    // Set up toggles
    const toggles = (
        <div className="toggle_container">
            <p>Here be toggles!</p>
        </div>
    );

    const options_container = (
        <div className="options_container">
            <div className="options_element">{maps_selector}</div>
            <div className="options_element">{toggles}</div>
        </div>
    );

    const content = (
        <>
            {title}
            {options_container}
            {map_images}
            {modal}
        </>
    );

    return content;
}
