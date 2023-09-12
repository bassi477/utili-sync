import { AppThemeGrayColorProps } from "./Colors";
import AppThemeComponentScheme from "./Components";
import AppThemeFontProps from "./Fonts";
import AppThemeLinkScheme from "./Link";

// Buttons
//
// For each button, define text, background, and border color.

// core size base
const inputScaleBase = 16;
// imports
const appThemeActiveComponentBackground = AppThemeComponentScheme.active.background;
const appThemeComponentBorderWidth = AppThemeComponentScheme.border.width;
const appThemeComponentBorderRadiusNormal = AppThemeComponentScheme.borderRadius.normal;
const appThemeComponentBorderRadiusSm = AppThemeComponentScheme.borderRadius.sm;
const appThemeComponentBorderRadiusLg = AppThemeComponentScheme.borderRadius.lg;
const appThemeFontSizeBase = AppThemeFontProps.sizes.base;
const appThemeFontSizeSm = AppThemeFontProps.sizes.sm;
const appThemeFontSizeLg = AppThemeFontProps.sizes.lg;
const appThemeLineHeightBase = AppThemeFontProps.lineHeights.base;
const appThemeFontWeightNormal = AppThemeFontProps.weights.normal;
const appThemeColorBlack = AppThemeGrayColorProps.black;
const appThemeColorWhite = AppThemeGrayColorProps.white;
const appThemeColorGray600 = AppThemeGrayColorProps['gray600'];
const appThemeLinkColor = AppThemeLinkScheme.color;
const appThemeLinkHoverColor = AppThemeLinkScheme.hover.color;
// core - [size, font, lineHeight, padding]
const inputBtnPaddingY = .375 * inputScaleBase;
const inputBtnPaddingX = .75 * inputScaleBase;
const inputBtnFontFamily = null;
const inputBtnFontSize = appThemeFontSizeBase;
const inputBtnLineHeight = appThemeLineHeightBase;
// core - focus
const inputBtnFocusWidth = .25 * inputScaleBase;
const inputBtnFocusColorOpacity = .25;
const inputBtnFocusColor = `rgba(${appThemeActiveComponentBackground}, ${inputBtnFocusColorOpacity})`;
const inputBtnFocusBlur = 0;
const inputBtnFocusBoxShadow = `0 0 ${inputBtnFocusBlur} ${inputBtnFocusWidth} ${inputBtnFocusColor}`;
// core - sm - [padding, size] 
const inputBtnPaddingYSm = .25 * inputScaleBase;
const inputBtnPaddingXSm = .5 * inputScaleBase;
const inputBtnFontSizeSm = appThemeFontSizeSm;
// core - lg - [padding, size]
const inputBtnPaddingYLg = .5 * inputScaleBase;
const inputBtnPaddingXLg = 1 * inputScaleBase;
const inputBtnFontSizeLg = appThemeFontSizeLg;
// core - border-width
const inputBtnBorderWidth = appThemeComponentBorderWidth;
// button - [padding, size, lineHeight, whitespace]
const btnPaddingY = inputBtnPaddingY;
const btnPaddingX = inputBtnPaddingX;
const btnFontFamily = inputBtnFontFamily;
const btnFontSize = inputBtnFontSize;
const btnLineHeight = inputBtnLineHeight;
const btnWhiteSpace = null; // Set to `nowrap` to prevent text wrapping
// button - sm - [padding, size]
const btnPaddingYSm = inputBtnPaddingYSm;
const btnPaddingXSm = inputBtnPaddingXSm;
const btnFontSizeSm = inputBtnFontSizeSm;
// button - lg - [padding, size]
const btnPaddingYLg = inputBtnPaddingYLg;
const btnPaddingXLg = inputBtnPaddingXLg;
const btnFontSizeLg = inputBtnFontSizeLg;
// button - border-width
const btnBorderWidth = inputBtnBorderWidth;
// button - [fontWeight, box-shadow, opacity]
const btnFontWeight = appThemeFontWeightNormal;
const btnBoxShadow = `inset 0 1 0 rgba(${appThemeColorWhite}, .15), 0 1 1 rgba(${appThemeColorBlack}, .075)`;
const btnFocusWidth = inputBtnFocusWidth;
const btnFocusBoxShadow = inputBtnFocusBoxShadow;
const btnDisabledOpacity = .65;
const btnActiveBoxShadow = `inset 0 3 5 rgba(${appThemeColorBlack}, .125)`;
// button - link - [color, hover, disabled]
const btnLinkColor = appThemeLinkColor;
const btnLinkHoverColor = appThemeLinkHoverColor;
const btnLinkDisabledColor = appThemeColorGray600;
// button - border-radius
// Allows for customizing button radius independently from global border radius
const btnBorderRadius = appThemeComponentBorderRadiusNormal;
const btnBorderRadiusSm = appThemeComponentBorderRadiusSm;
const btnBorderRadiusLg = appThemeComponentBorderRadiusLg;
// button - lg - [padding, size]
const btnTransition = `color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out`;
// button - lg - [padding, size]
const btnHoverBgShadeAmount = .15;
const btnHoverBgTintAmount = .15;
const btnHoverBorderShadeAmount = .2;
const btnHoverBorderTintAmount = .1;
const btnActiveBgShadeAmount = .2;
const btnActiveBgTintAmount = .2;
const btnActiveBorderShadeAmount = .25;
const btnActiveBorderTintAmount = .1;



const AppThemeButtonProps = {
    core: {
        padding: {
            baseX: inputBtnPaddingX,
            baseY: inputBtnPaddingY,
            smX: inputBtnPaddingXSm,
            smY: inputBtnPaddingYSm,
            lgX: inputBtnPaddingXLg,
            lgY: inputBtnPaddingYLg,
        },
        fontFamily: inputBtnFontFamily,
        fontSize: {
            base: inputBtnFontSize,
            sm: inputBtnFontSizeSm,
            lg: inputBtnFontSizeLg,
        },
        lineHeight: inputBtnLineHeight,
        focus: {
            width: inputBtnFocusWidth,
            colorOpacity: inputBtnFocusColorOpacity,
            color: inputBtnFocusColor,
            blur: inputBtnFocusBlur,
            boxShadow: inputBtnFocusBoxShadow
        }
    },
    btn: {
        borderWidth: btnBorderWidth,
        boxShadow: btnBoxShadow,
        disabledOpacity: btnDisabledOpacity,
        padding: {
            baseX: btnPaddingX,
            baseY: btnPaddingY,
            smX: btnPaddingXSm,
            smY: btnPaddingYSm,
            lgX: btnPaddingXLg,
            lgY: btnPaddingYLg,
        },
        font: {
            size: {
                base: btnFontSize,
                sm: btnFontSizeSm,
                lg: btnFontSizeLg,
            },
            weight: btnFontWeight,
            family: btnFontFamily,
            lineHeight: btnLineHeight,
            whitespace: btnWhiteSpace,
        },
        focus: {
            width: btnFocusWidth,
            colorOpacity: inputBtnFocusColorOpacity,
            color: inputBtnFocusColor,
            blur: inputBtnFocusBlur,
            boxShadow: btnFocusBoxShadow
        },
        link: {
            color: btnLinkColor,
            hoverColor: btnLinkHoverColor,
            disabledColor: btnLinkDisabledColor
        },
        hover: {
            bgShadeAmount: btnHoverBgShadeAmount,
            bgTintAmount: btnHoverBgTintAmount,
            borderShadeAmount: btnHoverBorderShadeAmount,
            borderTintAmount: btnHoverBorderTintAmount,
        },
        active: {
            boxShadow: btnActiveBoxShadow,
            bgShadeAmount: btnActiveBgShadeAmount,
            bgTintAmount: btnActiveBgTintAmount,
            borderShadeAmount: btnActiveBorderShadeAmount,
            borderTintAmount: btnActiveBorderTintAmount,
        },
        borderRadius: {
            base: btnBorderRadius,
            sm: btnBorderRadiusSm,
            lg: btnBorderRadiusLg
        },
        transition: btnTransition
    },
};

export default AppThemeButtonProps;