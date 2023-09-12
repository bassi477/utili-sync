import AppThemeBodyProps from "./Body";
import AppThemeButtonScheme from "./Buttons";
import { AppThemeGrayColorProps } from "./Colors";
import AppThemeComponentScheme from "./Components";
import AppThemeFontScheme from "./Fonts";
import AppThemeLinkScheme from "./Link";
import AppThemeSpacingProps from "./Spacing";


const scaleBase = AppThemeSpacingProps.spacerBase,
    spacer = AppThemeSpacingProps.spacer,
    linkColor = AppThemeLinkScheme.color,
    linkHoverColor = AppThemeLinkScheme.hover.color,
    borderWidth = AppThemeComponentScheme.border.width,
    componentActiveColor = AppThemeComponentScheme.active.color,
    componentActiveBg = AppThemeComponentScheme.active.background,
    borderRadius = AppThemeComponentScheme.borderRadius.normal,
    fontSizeBase = AppThemeFontScheme.sizes.base,
    fontSizeLg = AppThemeFontScheme.sizes.lg,
    lineHeightBase = AppThemeFontScheme.lineHeights.base,
    bodyBg = AppThemeBodyProps.background,
    btnBorderRadius = AppThemeButtonScheme.btn.borderRadius,
    btnFocusWidth = AppThemeButtonScheme.btn.focus.width,
    appThemeColorGray700 = AppThemeGrayColorProps.gray700,
    appThemeColorGray600 = AppThemeGrayColorProps.gray600,
    appThemeColorGray300 = AppThemeGrayColorProps.gray300,
    appThemeColorGray200 = AppThemeGrayColorProps.gray200,
    appThemeColorWhite = AppThemeGrayColorProps.white,
    appThemeColorBlack = AppThemeGrayColorProps.black;
// Navs
const navLinkPaddingY = .5 * scaleBase,
    navLinkPaddingX = 1 * scaleBase,
    navLinkFontSize = null,
    navLinkFontWeight = null,
    navLinkColor = linkColor,
    navLinkHoverColor = linkHoverColor,
    navLinkTransition = `color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out`,
    navLinkDisabledColor = appThemeColorGray600,
    navTabsBorderColor = appThemeColorGray300,
    navTabsBorderWidth = borderWidth,
    navTabsBorderRadius = borderRadius,
    navTabsLinkHoverBorderColor = `${appThemeColorGray200} ${appThemeColorGray200} ${navTabsBorderColor}`,
    navTabsLinkActiveColor = appThemeColorGray700,
    navTabsLinkActiveBg = bodyBg,
    navTabsLinkActiveBorderColor = `${appThemeColorGray300} ${appThemeColorGray300} ${navTabsLinkActiveBg}`,
    navPillsBorderRadius = borderRadius,
    navPillsLinkActiveColor = componentActiveColor,
    navPillsLinkActiveBg = componentActiveBg;

// Navbar
const navbarPaddingY = spacer * .5,
    navbarPaddingX = null,
    navbarNavLinkPaddingX = .5 * scaleBase,
    navbarBrandFontSize = fontSizeLg,
    // Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
    navLinkHeight = fontSizeBase * lineHeightBase + navLinkPaddingY * 2,
    navbarBrandHeight = navbarBrandFontSize * lineHeightBase,
    navbarBrandPaddingY = (navLinkHeight - navbarBrandHeight) * .5,
    navbarBrandMarginEnd = 1 * scaleBase,

    navbarTogglerPaddingY = .25 * scaleBase,
    navbarTogglerPaddingX = .75 * scaleBase,
    navbarTogglerFontSize = fontSizeLg,
    navbarTogglerBorderRadius = btnBorderRadius,
    navbarTogglerFocusWidth = btnFocusWidth,
    navbarTogglerTransition = `box-shadow .15s ease -in -out`;

// Navbar-theme
const navbarDarkColor = `rgba(${appThemeColorWhite}, .55)`,
    navbarDarkHoverColor = `rgba(${appThemeColorWhite}, .75)`,
    navbarDarkActiveColor = appThemeColorWhite,
    navbarDarkDisabledColor = `rgba(${appThemeColorWhite}, .25)`,
    navbarDarkTogglerIconBg = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>")`,
    navbarDarkTogglerBorderColor = `rgba(${appThemeColorWhite}, .1)`,

    navbarLightColor = `rgba(${appThemeColorBlack}, .55)`,
    navbarLightHoverColor = `rgba(${appThemeColorBlack}, .7)`,
    navbarLightActiveColor = `rgba(${appThemeColorBlack}, .9)`,
    navbarLightDisabledColor = `rgba(${appThemeColorBlack}, .3)`,
    navbarLightTogglerIconBg = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>")`,
    navbarLightTogglerBorderColor = `rgba(${appThemeColorBlack}, .1)`,

    navbarLightBrandColor = navbarLightActiveColor,
    navbarLightBrandHoverColor = navbarLightActiveColor,
    navbarDarkBrandColor = navbarDarkActiveColor,
    navbarDarkBrandHoverColor = navbarDarkActiveColor;

const AppThemeNavProps = {
    nav: {
        link: {
            paddingX: navLinkPaddingX,
            paddingY: navLinkPaddingY,
            transition: navLinkTransition,
            font: {
                size: navLinkFontSize,
                weight: navLinkFontWeight,
            },
            color: {
                base: navLinkColor,
                hover: navLinkHoverColor,
                disabled: navLinkDisabledColor
            },
        },
        tab: {
            borderRadius: navTabsBorderRadius,
            border: {
                width: navTabsBorderWidth,
                color: navTabsBorderColor
            },
            link: {
                active: {
                    color: navTabsLinkActiveColor,
                    backgroundColor: navTabsLinkActiveBg,
                },
                border: {
                    color: {
                        hover: navTabsLinkHoverBorderColor,
                        active: navTabsLinkActiveBorderColor
                    }
                }
            }
        },
        pill: {
            borderRadius: navPillsBorderRadius,
            link: {
                active: {
                    color: navPillsLinkActiveColor,
                    backgroundColor: navPillsLinkActiveBg,
                },
            },
        }
    },
    navBar: {
        paddingX: navbarPaddingX,
        paddingY: navbarPaddingY,
        link: {
            paddingX: navbarNavLinkPaddingX,
            height: navLinkHeight
        },
        brand: {
            paddingY: navbarBrandPaddingY,
            height: navbarBrandHeight,
            fontSize: navbarBrandFontSize,
            marginEnd: navbarBrandMarginEnd,
        },
        toggler: {
            paddingY: navbarTogglerPaddingY,
            paddingX: navbarTogglerPaddingX,
            fontSize: navbarTogglerFontSize,
            borderRadius: navbarTogglerBorderRadius,
            focusWidth: navbarTogglerFocusWidth,
            transition: navbarTogglerTransition,
        },
        theme: {
            dark: {
                color: {
                    base: navbarDarkColor,
                    hover: navbarDarkHoverColor,
                    active: navbarDarkActiveColor,
                    disabled: navbarDarkDisabledColor,
                },
                toggler: {
                    iconBg: navbarDarkTogglerIconBg,
                    borderColor: navbarDarkTogglerBorderColor
                },
                brand: {
                    color: {
                        base: navbarDarkBrandColor,
                        hover: navbarDarkBrandHoverColor,
                    },
                },
            },
            light: {
                color: {
                    base: navbarLightColor,
                    hover: navbarLightHoverColor,
                    active: navbarLightActiveColor,
                    disabled: navbarLightDisabledColor,
                },
                toggler: {
                    iconBg: navbarLightTogglerIconBg,
                    borderColor: navbarLightTogglerBorderColor,
                },
                brand: {
                    color: {
                        base: navbarLightBrandColor,
                        hover: navbarLightBrandHoverColor,
                    },
                },
            }
        }
    }
};

export default AppThemeNavProps;