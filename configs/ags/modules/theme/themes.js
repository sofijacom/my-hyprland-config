
const WALLPAPER_PATH = ".config/ags/images";

const black_hole = {
    wallpaper: `${WALLPAPER_PATH}/black-hole.png`,
    css_theme: "black-hole.scss",
    plasma_color: "ArcMidnightDark.colors",
    qt_style_theme: "Lightly",
    // qt_style_theme: "kvantum",
    qt_icon_theme: "NeonIcons",
    kvantum_theme: "a-color",
    gtk_theme: "Shades-of-purple",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(FDBBC4ff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 15,
        "drop_shadow": "no",
    }
}

const deer = {
    wallpaper: `${WALLPAPER_PATH}/deer.jpg`,
    css_theme: "deer.scss",
    plasma_color: "BlueDeer.colors",
    qt_style_theme: "Lightly",
    qt_icon_theme: "NeonIcons",
    kvantum_theme: "a-color",
    gtk_theme: "Shades-of-purple",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(FDB4B7ff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 15,
        "drop_shadow": "no",
    }
}

const colors = {
    wallpaper: `${WALLPAPER_PATH}/colors.png`,
    css_theme: "colors.scss",
    plasma_color: "AColors.colors",
    qt_style_theme: "Lightly",
    qt_icon_theme: "NeonIcons",
    kvantum_theme: "a-color",
    gtk_theme: "Kimi-dark",
    hypr: {
        "border_width": 2,
        "active_border": "rgba(1ed4fdff) 0deg",
        "inactive_border": "rgba(59595900) 0deg",
        "rounding": 15,
        "drop_shadow": "no",
    },
}

export const BLACK_HOLE_THEME = 0;
export const DEER_THEME = 1;
export const COLOR_THEME = 2;

const ThemesDictionary = {
    [BLACK_HOLE_THEME]: black_hole,
    [DEER_THEME]: deer,
    [COLOR_THEME]: colors,
}

export default ThemesDictionary
