const common = {
    breakpoints: {
        mobileSmall: 532,
        mobile: 767,
        tablet: 991,
        desktopSmall: 1199,
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
        white: colorNames.white,
        background: colorNames.gallery,
        textPrimary: colorNames.mineShaft,
        textSecondary: colorNames.mineShaft,
        titleText: colorNames.mineShaft,
        button: colorNames.yellowOrange,
        shadow: colorNames.periwinkleGray,
        accent: colorNames.yellowOrange,
        tile: {
            background: colorNames.periwinkleGray,
            date: {
                background: colorNames.gallery,
                border: colorNames.yellowOrange,
            },
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        white: colorNames.white,
        background: colorNames.tangaroa,
        textPrimary: colorNames.mineShaft,
        textSecondary: colorNames.periwinkleGray,
        titleText: colorNames.gallery,
        button: colorNames.periwinkleGray,
        shadow: colorNames.yellowOrange,
        accent: colorNames.yellowOrange,
        tile: {
            background: colorNames.periwinkleGray,
            date: {
                background: colorNames.gallery,
                border: colorNames.yellowOrange,
            },
        },
    },
};