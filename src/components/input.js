import "common.css";

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

export function UnsignedFloatInput(value, set_value, placeholder) {
    return RegexInput(
        value,
        set_value,
        /^[0-9]*\.?[0-9]*$/,
        placeholder,
        "numeric",
        "[0-9]*"
    );
}
