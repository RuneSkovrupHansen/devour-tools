import React from "react";

import "common.css";

import { Image } from "components/image";
import { ModalWrapper } from "components/modal_wrapper";

// Add lazy loading for images

import map_inn_floor_1 from "resources/maps/inn_floor_1.jpg";
import map_inn_floor_2 from "resources/maps/inn_floor_2.jpg";

export default function Maps() {
    const title = <h1>Maps</h1>;

    // Set up modal state
    const [modal_is_open, set_modal_is_open] = React.useState(false);
    const [modal_image, set_modal_image] = React.useState();
    // Set up modal content using state as content
    const modal_content = <Image src={modal_image} />;

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

    // Set up images for different maps

    const content = (
        <>
            {title}
            {ModalImage(map_inn_floor_1)}
            {ModalImage(map_inn_floor_2)}
            {modal}
        </>
    );

    return content;
}
