import React, { useState } from "react";

import "common.css";
import "pages/maps.css";

import { ModalWrapper } from "components/modal_wrapper";
import { Spacing } from "common";
import { Checkbox } from "components/checkbox";
import { Dropdown } from "components/dropdown";
import { ImageMerger } from "components/image_merger";
import { Map } from "devour";

// Add lazy loading for images

// Images

const maps = [Map.farmhouse, Map.asylum, Map.inn, Map.town, Map.slaughterhouse];

export default function Maps() {
    const title = <h1>Maps</h1>;

    // Map dropdown

    const [map, setMap] = useState(maps[0]);

    const options = maps.map((map) => ({
        value: map,
        label: map.name,
    }));

    const dropdown = Dropdown(options, (value) => {
        setMap(value);
    })

    // Checkboxes

    const overlay_types = map.get_overlay_types();

    const [overlayVisibilityMap, setOverlayVisibilityMap] = useState(() => {
        let map = {};
        overlay_types.forEach((overlay) => {
            map[overlay] = false;
        });
        return map
    })

    /* Return a Checkbox for each overlay with a callback attached to
    toggle the visibility for that overlay. */
    const toggles = (
        <div className="checkboxes_container">
            {overlay_types.map((overlay, index) => {
                return <div key={index}>{Checkbox(overlay, (is_checked) => {
                    const map = Object.assign({}, overlayVisibilityMap, { [overlay]: is_checked });
                    setOverlayVisibilityMap(map);
                })}</div>
            })}
        </div >
    );

    const options_container = (
        <div className="
        options_container">
            <div className="options_element">{dropdown}</div>
            <div className="options_element">{toggles}</div>
        </div>
    );

    // Build stacked images

    let stacked_images = map.images.map((image, index) => {
        let images = [image.src];
        image.overlays.forEach((overlay) => {
            if (overlayVisibilityMap[overlay.type]) {
                images.push(overlay.src)
            }
        })
        return <div key={index}>{ImageMerger(images)}</div>
    })

    // Modal

    // Set up modal state
    const [modalImage, setModalImage] = React.useState();

    // Set up modal content using state as content
    const modal_content = (
        <img alt="" className="image_fit_parent" src={modalImage} />
    );

    // Set up modal
    const [openModal, modal] = ModalWrapper(
        modal_content
    );

    // Set up wrapper for MapImage with modal on click
    function ModalImage(title, src) {
        return (
            <>
                <h3>{title}</h3>
                <img
                    src={src}
                    onClick={() => {
                        setModalImage(src);
                        openModal();
                    }}
                    alt=""
                />
            </>
        )
    }

    // Create modal images from stacked images


    const content = (
        <>
            {title}
            {options_container}
            {stacked_images}
            {modal}
        </>
    );

    return content;
}
