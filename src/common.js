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

export const is_development_environment = () => {
    return process.env.NODE_ENV === "development";
};

export const url_site = "https://runeskovruphansen.github.io/devour-tools/";
export const url_site_perks = url_site + "perks";
export const url_site_maps = url_site + "maps";

export const url_youtube_affinity = "https://www.youtube.com/@Affinity001";
export const url_github_rune = "https://github.com/RuneSkovrupHansen";
export const url_github_devour_tools =
    "https://github.com/RuneSkovrupHansen/devour-tools/";
