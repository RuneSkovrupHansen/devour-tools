import "components/label_input.css";

export function Input(label, value) {
    return (
        <div className="label_input_container">
            <label>{label}</label>
            <input type="number" value={value} />
            <span class="underline"></span>
        </div>
    );
}
