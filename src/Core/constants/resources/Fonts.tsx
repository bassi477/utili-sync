// Typography
//
// Font, line-height, and color for body text, headings, and more.

// font family
const fontFamilySansSerif = `system-ui, -apple-system, "Segoe UI", Roboto,
"Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", "sans-serif", "Apple Color Emoji",
"Segoe UI Emoji", "Noto Color Emoji"`;
const fontFamilyMonoSpace = `"SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
const fontFamilyBase = fontFamilySansSerif;
const fontFamilyCode = fontFamilyMonoSpace;
// font size
const fontSizeRoot = null;
const fontSizeBase = 16;
const fontSizeSm = fontSizeBase * .875;
const fontSizeLg = fontSizeBase * 1.25;
// font weight
const fontWeightLighter = '100';
const fontWeightLight = '300';
const fontWeightNormal = '400';
const fontWeightBold = '700';
const fontWeightBolder = '900';
const fontWeightBase = fontWeightNormal;
// line height
const lineHeightBase = 1.5;
const lineHeightSm = 1.25;
const lineHeightLg = 2;
// headings
const h1FontSize = fontSizeBase * 2.5;
const h2FontSize = fontSizeBase * 2;
const h3FontSize = fontSizeBase * 1.75;
const h4FontSize = fontSizeBase * 1.5;
const h5FontSize = fontSizeBase * 1.25;
const h6FontSize = fontSizeBase;

const AppThemeFontProps = {
    family: {
        sansSerif: fontFamilySansSerif,
        monoSpace: fontFamilyMonoSpace,
        base: fontFamilyBase,
        code: fontFamilyCode
    },
    sizes: {
        root: fontSizeRoot,
        base: fontSizeBase,
        sm: fontSizeSm,
        lg: fontSizeLg,
        headings: {
            h1: h1FontSize,
            h2: h2FontSize,
            h3: h3FontSize,
            h4: h4FontSize,
            h5: h5FontSize,
            h6: h6FontSize
        }
    },
    weights: {
        base: fontWeightBase,
        lighter: fontWeightLighter,
        light: fontWeightLight,
        normal: fontWeightNormal,
        bold: fontWeightBold,
        bolder: fontWeightBolder
    },
    lineHeights: {
        base: lineHeightBase,
        sm: lineHeightSm,
        lg: lineHeightLg
    }
};

export default AppThemeFontProps;