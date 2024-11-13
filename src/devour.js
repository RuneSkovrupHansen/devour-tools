// Farmhouse
import farmhouse_overview from "resources/maps/farmhouse/farmhouse_overview.jpg";

// Asylum
import asylum_overview_1 from "resources/maps/asylum/asylum_overview_1.jpg";
import asylum_overview_2 from "resources/maps/asylum/asylum_overview_2.jpg";

// Inn
import inn_floor_1 from "resources/maps/inn/inn_floor_1.jpg";
import inn_floor_2 from "resources/maps/inn/inn_floor_2.jpg";

// Town
import town_overview from "resources/maps/town/town_overview.jpg";

// Slaughterhouse
import slaughterhouse_basement from "resources/maps/slaughterhouse/slaughterhouse_basement.jpg";
import slaughterhouse_floor_1 from "resources/maps/slaughterhouse/slaughterhouse_floor_1.jpg";
import slaughterhouse_floor_2 from "resources/maps/slaughterhouse/slaughterhouse_floor_2.jpg";

class MapImage {
    constructor(name, src) {
        this.name = name;
        this.src = src;
    }
}

class Map_ {
    constructor(name, images) {
        this.name = name;
        this.images = images;
    }
}

const farmhouse = new Map_("Farmhouse", [
    new MapImage("Overview", farmhouse_overview),
]);

export const asylum = new Map_("Asylum", [
    new MapImage("Overview 1", asylum_overview_1),
    new MapImage("Overview 2", asylum_overview_2),
]);

export const inn = new Map_("Inn", [
    new MapImage("Floor 1", inn_floor_1),
    new MapImage("Floor 2", inn_floor_2),
]);

const town = new Map_("Town", [new MapImage("Overview", town_overview)]);

const slaughterhouse = new Map_("Slaughterhouse", [
    new MapImage("Basement", slaughterhouse_basement),
    new MapImage("Floor 1", slaughterhouse_floor_1),
    new MapImage("Floor 2", slaughterhouse_floor_2),
]);

export const Map = {
    farmhouse: farmhouse,
    asylum: asylum,
    inn: inn,
    town: town,
    slaughterhouse: slaughterhouse,
};

/**
 * Calculate time spent moving.
 *
 * @param {number} time Total time in seconds.
 * @param {number} movement_percent Percent of time spent moving.
 * @param {number} long_interacts Number of long interactions.
 * @param {number} long_interact_time Time in seconds required for each long interact.
 *
 * @returns Time in second spent moving.
 */
export function calculate_movement_time(
    time,
    movement_percent,
    long_interacts,
    long_interact_time
) {
    const interact_time = long_interacts * long_interact_time;
    return (time - interact_time) * (movement_percent / 100);
}

/**
 * Calculate time save from the Speedy perk.
 *
 * The perk increases movement speed by a flat percent.
 *
 * @param {number} time Time in seconds spent moving.
 * @param {number} speed_increase_percent Movement speed increase in percent.
 *
 * @returns {number} Time save in seconds.
 */
export function calculate_speedy_time_save(time, speed_increase_percent) {
    return time - time * (1 - speed_increase_percent / 100);
}

/**
 * Calculate time save from the Fast Worker perk.
 *
 * @param {number} speed_increase_percent Long interact speed increase in percent.
 * @param {number} long_interacts Number of long interacts.
 * @param {number} long_interact_time Time in seconds required for each long interact.
 *
 * @returns Time save in seconds.
 */
export function calculate_fast_worker_time_save(
    speed_increase_percent,
    long_interacts,
    long_interact_time
) {
    const fast_worker_interact_time =
        long_interact_time / (1 + speed_increase_percent / 100);
    const baseline_time = long_interacts * long_interact_time;
    return baseline_time - long_interacts * fast_worker_interact_time;
}

/**
 * Calculate number of batteries required for Supercharge perk to match the Speedy perk.
 *
 * Calculation assumes that the Supercharge perk is used optimally. I.e. no overlap between battery usage and all time with increased movement speed is spent moving.
 *
 * @param {number} time Time in seconds spent moving.
 * @param {number} speedy_increase_percent Movement speed increase in percent from Speedy perk.
 * @param {number} supercharged_increased_percent Movement speed increase in percent from Supercharged perk.
 * @param {number} supercharged_time Duration of each Supercharged perk speed burst in seconds.
 *
 * @returns The number of batteries required.
 */
export function calculate_batteries_required_for_supercharged_to_match_speedy(
    time,
    speedy_increase_percent,
    supercharged_increased_percent,
    supercharged_time
) {
    return (
        (speedy_increase_percent / supercharged_increased_percent) *
        (time / supercharged_time)
    );
}
