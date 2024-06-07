export default function NumericInputPass(value, set_value) {
    const handleChange = (event) => {
        const newValue = event.target.value;
        if (newValue === '' || /^[0-9]*\.?[0-9]*$/.test(newValue)) {
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
