import React from "react";

import "common.css";

import { Image } from "components/image";
import { MyModal } from "components/modal";

// Add lazy loading for images
// Add pop-out for images

import map_inn_floor_1 from "resources/maps/inn_floor_1.jpg";

export default function Maps() {
    const title = <h1>Maps</h1>;

    const [isOpen, setIsOpen] = React.useState(false);

    const img = <Image src={map_inn_floor_1} />;

    const [openModal, modal] = MyModal(isOpen, setIsOpen, img);

    const content = (
        <>
            {title}
            <Image src={map_inn_floor_1} title="Test" onClick={openModal} />
            {modal}
        </>
    );

    return content;
}
