export function feature_flag(feature_flag, true_ = true, false_ = <></>) {
    return feature_flag ? true_ : false_;
}

/* Application feature flags. Set a flag to true
to enable the feature. */

export const flag_perks = true;
export const flag_maps = false;
