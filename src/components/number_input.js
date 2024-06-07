import React, { useState } from 'react';

export default function NumericInput(external_set_value) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        if (newValue === '' || /^[0-9]*\.?[0-9]*$/.test(newValue)) {
            setValue(newValue);
            external_set_value(newValue)
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter a number"
        />
    );
}
