export const IS_UNIVERS_PREFILTERED = 'IS_UNIVERS_PREFILTERED';

export const isUniversPrefiltered = (isPrefiltered) => {
    return {
        type: IS_UNIVERS_PREFILTERED,
        isUniversPrefiltered: isPrefiltered
    }
}