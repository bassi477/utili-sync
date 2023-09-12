import AppThemeSpacingProps from "./Spacing";

const spacer = AppThemeSpacingProps.spacer,
    scalebase = AppThemeSpacingProps.spacerBase;

// headings, display-headings
const headingsMarginBottom = spacer * .5,
    headingsFontFamily = null,
    headingsFontStyle = null,
    headingsFontWeight = 500,
    headingsLineHeight = 1.2,
    headingsColor = null,
    displayFontSizes = {
        1: 5 * scalebase,
        2: 4.5 * scalebase,
        3: 4 * scalebase,
        4: 3.5 * scalebase,
        5: 3 * scalebase,
        6: 2.5 * scalebase
    },
    displayFontWeight = 300,
    displayLineHeight = headingsLineHeight;

const AppThemeHeadingProps = {
    font: {
        family: headingsFontFamily,
        style: headingsFontStyle,
        weight: headingsFontWeight,
    },
    lineHeight: headingsLineHeight,
    marginBottom: headingsMarginBottom,
    color: headingsColor,
    display: {
        font: {
            sizes: displayFontSizes,
            weight: displayFontWeight,
        },
        lineHeight: displayLineHeight
    },
};

export default AppThemeHeadingProps;