import "common.css"

export function RegexInput(value, set_value, regex, placeholder) {
    const handleChange = (event) => {
        const newValue = event.target.value;
        console.log(newValue);
        if (newValue === '' || regex.test(newValue)) {
            set_value(newValue)
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
}

export function UnsignedFloatInput(value, set_value, placeholder) {
    return RegexInput(value, set_value, /^[0-9]*\.?[0-9]*$/, placeholder)
}
