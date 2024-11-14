import React, { useState } from "react";

import "common.css";
import "pages/maps.css";

import { ModalWrapper } from "components/modal_wrapper";
import { Dropdown } from "components/dropdown";
import { Map } from "devour";

const maps = [Map.farmhouse, Map.asylum, Map.inn, Map.town, Map.slaughterhouse];

export default function Maps() {
    const title = <h1>Maps</h1>;

    const [map, setMap] = useState(maps[0]);

    const options = maps.map((map) => ({
        value: map,
        label: map.name,
    }));

    const dropdown = Dropdown(options, (value) => {
        setMap(value);
    });

    const options_container = (
        <div className="options_container">
            <div className="options_element">{dropdown}</div>
        </div>
    );

    let images = map.images.map((image, index) => {
        return <img src={image.src} alt={image.alt} className="image" />;
    });

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

    const modal_elements = images.map((image, index) => {
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
