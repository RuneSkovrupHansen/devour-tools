import "common.css"

export function RegexInput(value, set_value, regex) {
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
        />
    );
}

export function UnsignedFloatInput(value, set_value) {
    return RegexInput(value, set_value, /^[0-9]*\.?[0-9]*$/)
}
