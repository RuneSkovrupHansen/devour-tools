/**
 * Round value to number of decimals.
 *
 * @param {number} value Value to be rounded.
 * @param {number} decimal Number of decimals.
 *
 * @returns Value rounded.
 */
export function round_to_decimal(value, decimal = 2) {
    return Math.round(value * 10 ** decimal) / 10 ** decimal;
}

export const url_youtube_affinity = "https://www.youtube.com/@Affinity001";
export const url_github_rune = "https://github.com/RuneSkovrupHansen";
export const url_github_devour_tools =
    "https://github.com/RuneSkovrupHansen/devour-tools/";
