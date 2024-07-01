import "components/checkbox.css";
import "common.css";

export function Checkbox(is_checked, set_is_checked, title) {
    return (
        <div className="checkbox_container">
            <input
                type="checkbox"
                checked={is_checked}
                onChange={(event) => {
                    set_is_checked(event.target.checked);
                }}
            />
            <p className="no_select">{title}</p>
        </div>
    );
}
