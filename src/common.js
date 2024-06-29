/**
 * Round value to number of decimals.
 *
 * @param {number} value Value to be rounded.
 * @param {number} decimal Number of decimals.
 *
 * @returns Value rounded.
 */
export function round_to_decimal(value, decimal = 1) {
    return Math.round(value * 10 ** decimal) / 10 ** decimal;
}

/**
 * Returns screen width in pixels.
 *
 * @returns Screen width.
 */
export function get_screen_width() {
    return window.innerWidth > 0 ? window.innerWidth : window.screen.width;
}

export const url_youtube_affinity = "https://www.youtube.com/@Affinity001";
export const url_github_rune = "https://github.com/RuneSkovrupHansen";
export const url_github_devour_tools =
    "https://github.com/RuneSkovrupHansen/devour-tools/";

export const get_hover_helpers = (value, set_value, style) => {
    const set_style = () => (value ? style : "");

    const on_mouse_enter = () => {
        set_value(true);
    };

    const on_mouse_leave = () => {
        set_value(false);
    };

    return {
        set_style: set_style,
        on_mouse_enter: on_mouse_enter,
        on_mouse_leave: on_mouse_leave,
    };
};

// Must match colors defined in styles.css
export const Color = {
    red: "#a70418",
    red_transparent: "rgba(167, 4, 24, 0.8)",
    black: "#040405",
    dark_grey: "#1c1f25",
    grey: "#282c34",
    grey_transparent: "rgba(40, 44, 52, 0.9)",
    white: "#ffffff",
    soft_white: "#eeeded",
    green: "#3bb143",
    orange: "#ff6201",
};

export const Spacing = {
    small: "8px",
    medium: "16px",
    large: "24px",
    huge: "32px",
};
