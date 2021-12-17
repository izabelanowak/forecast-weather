const common = {
    breakpoints: {
        mobile: 767,
        tablet: 991,
    },
};

const colorNames = {
    white: "#FFFFFF",
    gallery: "#EEEEEE",
    mineShaft: "#252525",
    periwinkleGray: "#B4CBE0",
    cornflower: "#8ABBE5",
    tangaroa: "#030F34",
    portica: "#F8E26E",
    yellowOrange: "#FA9E42",
};

export const themeLight = {
    ...common,
    colors: {
        background: colorNames.gallery,
        textPrimary: colorNames.mineShaft,
        textSecondary: colorNames.yellowOrange,
        button: colorNames.yellowOrange,
        shadow: colorNames.periwinkleGray,
    },
};

export const themeDark = {
    ...common,
    colors: {
        background: colorNames.tangaroa,
        textPrimary: colorNames.gallery,
        textSecondary: colorNames.periwinkleGray,
        button: colorNames.periwinkleGray,
        shadow: colorNames.yellowOrange,
    },
};