import { AppThemeGrayColorScheme } from "./Colors";
import AppThemeComponentScheme from "./Components";
import AppThemeFontScheme from "./Fonts";
import AppThemeSpacingProps from "./Spacing";

const fontSizeBase = AppThemeFontScheme.sizes.base,
    scaleBase = AppThemeSpacingProps.spacerBase,
    spacer = AppThemeSpacingProps.spacer,
    borderWidth = AppThemeComponentScheme.border.width,
    fontWeightBold = AppThemeFontScheme.weights.bold,
    appThemeColorGray600 = AppThemeGrayColorScheme.gray600;

// scss-docs-start type-variables
const leadFontSize = fontSizeBase * 1.25,
    leadFontWeight = 300,
    smallFontSize = .875 * scaleBase,
    subSupFontSize = .75 * scaleBase,
    textMuted = appThemeColorGray600,
    initialismFontSize = smallFontSize,
    blockquoteMarginY = spacer,
    blockquoteFontSize = fontSizeBase * 1.25,
    blockquoteFooterColor = appThemeColorGray600,
    blockquoteFooterFontSize = smallFontSize,
    hrMarginY = spacer,
    hrColor = 'inherit',
    hrHeight = borderWidth,
    hrOpacity = .25,
    legendMarginBottom = .5 * scaleBase,
    legendFontSize = 1.5 * scaleBase,
    legendFontWeight = null,
    markPadding = .2 * scaleBase,
    dtFontWeight = fontWeightBold,
    nestedKbdFontWeight = fontWeightBold,
    listInlinePadding = .5 * scaleBase,
    markBg = '#fcf8e3';

const AppThemeTypeBasedProps = {
    lead: {
        fontSize: leadFontSize,
        fontWeight: leadFontWeight
    },
    small: {
        fontSize: smallFontSize
    },
    subSup: {
        fontSize: subSupFontSize
    },
    initialism: {
        fontSize: initialismFontSize
    },
    blockquote: {
        fontSize: blockquoteFontSize,
        marginY: blockquoteMarginY,
    },
    blockquoteFooter: {
        fontSize: blockquoteFooterFontSize,
        color: blockquoteFooterColor
    },
    legend: {
        fontSize: legendFontSize,
        fontWeight: legendFontWeight,
        marginBottom: legendMarginBottom
    },
    dt: {
        fontWeight: dtFontWeight
    },
    nestedKbd: {
        fontWeight: nestedKbdFontWeight
    },
    hr: {
        marginY: hrMarginY,
        color: hrColor,
        height: hrHeight,
        opacity: hrOpacity,
    },
    mark: {
        padding: markPadding,
        bg: markBg
    },
    list: {
        inlinePadding: listInlinePadding
    },
    textMuted: {
        color: textMuted
    },
};

export default AppThemeTypeBasedProps;