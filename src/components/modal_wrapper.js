import React from "react";
import Modal from "react-modal";

import "components/modal_wrapper.css";

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
        display: "flex",
        height: "95%",
        width: "85%",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        border: "",
        background: "",
    },
};

Modal.setAppElement(document.getElementById("root"));

export function ModalWrapper(isOpen, setIsOpen, content) {
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }

    return [
        openModal,
        <div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="content_container" onClick={closeModal}>
                    {content}
                </div>
            </Modal>
        </div>,
    ];
}
