export function feature_flag(feature_flag, element) {
    return feature_flag ? element : <></>;
}

/* Application feature flags. Set a flag to true
to enable the feature. */

export const flag_perks = true;
export const flag_maps = false;
