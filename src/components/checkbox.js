import "components/checkbox.css";
import "common.css";

import { useState } from "react";

export function Checkbox(title, on_change) {
    const [is_checked, set_is_checked] = useState(false);

    return (
        <div className="checkbox_container">
            <input
                type="checkbox"
                checked={is_checked}
                onChange={(event) => {
                    set_is_checked(event.target.checked);
                    on_change(!is_checked)
                }}
            />
            <p className="no_select">{title}</p>
        </div>
    );
}
