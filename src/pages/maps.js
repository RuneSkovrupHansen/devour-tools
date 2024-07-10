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
    });

    // Create overlay options
    const overlay_types = map.get_overlay_types();

    const [overlayVisibilityMap, setOverlayVisibilityMap] = useState(() => {
        let map = {};
        overlay_types.forEach((overlay) => {
            map[overlay] = false;
        });
        return map;
    });

    /* Return a Checkbox for each overlay with a callback attached to
    toggle the visibility for that overlay. */
    const toggles = (
        <div className="checkboxes_container">
            {overlay_types.map((overlay, index) => {
                return (
                    <div key={index}>
                        {Checkbox(overlay, (is_checked) => {
                            const map = Object.assign(
                                {},
                                overlayVisibilityMap,
                                { [overlay]: is_checked }
                            );
                            setOverlayVisibilityMap(map);
                        })}
                    </div>
                );
            })}
        </div>
    );

    const options_container = (
        <div className="options_container">
            <div className="options_element">{dropdown}</div>
            <div className="options_element">{toggles}</div>
        </div>
    );

    // Build stacked image based on visibillity map
    let stacked_images = map.images.map((image, index) => {
        let images = [image.src];
        image.overlays.forEach((overlay) => {
            if (overlayVisibilityMap[overlay.type]) {
                images.push(overlay.src);
            }
        });
        return (
            <div key={index}>
                <ImageMerger images={images} />
            </div>
        );
    });

    // Set up modal
    const [modalContent, setModalContent] = React.useState();
    const [openModal, modal] = ModalWrapper(modalContent);

    function ModalElement(content) {
        return (
            <div
                onClick={() => {
                    setModalContent(content);
                    openModal();
                }}
            >
                {content}
            </div>
        );
    }

    // Create list of images using wrapper
    const modal_elements = stacked_images.map((image, index) => {
        return ModalElement(<div key={index}>{image}</div>);
    });

    const content = (
        <>
            {title}
            {options_container}
            {modal_elements}
            {modal}
        </>
    );

    return content;
}
