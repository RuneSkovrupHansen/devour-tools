export function LabelledInput(label, value, setValue) {
    return (
        <div>
            <label>{label}</label>
            <input
                type="number"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    )
}