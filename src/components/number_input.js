const NumberInput = (title, value, setValue) => {
    const handleChange = (e) => {
        const { value } = e.target;
        // Use a regular expression to replace any non-numeric characters
        if (/^\d*$/.test(value)) {
            setValue(value);
        }
    };

    return (
        <div>
            <label>
                {title}
                <input type="text" value={value} onChange={handleChange} />
            </label>
        </div>
    );
};

export default NumberInput;
