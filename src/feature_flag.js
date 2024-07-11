export function feature_flag(feature_flag, true_ = true, false_ = false) {
    return feature_flag ? true_ : false_;
}

/* Application feature flags. Set a flag to true
to enable the feature. */

export const Flag = {
    map_overlays: false,
    maps: false,
};
