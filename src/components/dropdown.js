import Select from "react-select";
import { Color } from "common";
import { useState } from "react";

const styles = {
    control: (styles) => ({
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
    option: (styles, { isDisabled, isFocused }) => {
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
    dropdownIndicator: (styles) => ({
        ...styles,
        color: Color.soft_white,
        "&:hover": {
            color: Color.soft_white,
        },
    }),
};

export function Dropdown(options, onOptionSelected) {

    // Initialize state to keep track of selected option
    const [option, setOption] = useState(options[0])

    return <Select
        styles={styles}
        options={options}
        defaultValue={option}
        placeholder={option}
        isSearchable={false}
        onChange={(option) => {
            setOption(option)
            onOptionSelected(option.value);
        }}
    />

}