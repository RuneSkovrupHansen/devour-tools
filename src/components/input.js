import { Tooltip } from 'react-tooltip'

import "common.css";
import "components/input.css";
import info from "resources/info.png";

export function RegexInput(
    value,
    set_value,
    regex,
    placeholder,
    input_mode = "text",
    pattern = ""
) {
    const handleChange = (event) => {
        const newValue = event.target.value;
        if (newValue === "" || regex.test(newValue)) {
            console.log(newValue);
            set_value(newValue);
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            inputMode={input_mode}
            pattern={pattern}
        />
    );
}

export function PositiveFloatInput(value, set_value, placeholder) {
    return RegexInput(
        value,
        set_value,
        /^[0-9]*\.?[0-9]*$/,
        placeholder,
        "numeric",
        "[0-9]*"
    );
}

export function Input(input, title, tooltip) {
    // Note that the title is used to generate an anchor class name, titles must be unique.
    const anchor = title.replace(/ /g, '-') + "-anchor-element";
    return (
        <>
            <div className="input_container">
                <div className="input_info_container">
                    <h3>{title}</h3>
                    <img
                        src={info}
                        className={"image_fit_parent " + anchor}
                        draggable="false" />
                </div>
                {input}
            </div>
            <Tooltip
                anchorSelect={"." + anchor}
                content={tooltip}
            />
        </>
    )
}