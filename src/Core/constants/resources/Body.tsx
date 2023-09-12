import { AppThemeGrayColorProps } from "./Colors";

// Body
//
// Settings for the `<body>` element.

const bodyBg = AppThemeGrayColorProps.white,
    bodyColor = AppThemeGrayColorProps.gray900,
    bodyTextAlign = null;

const AppThemeBodyProps = {
    background: bodyBg,
    color: bodyColor,
    textAlign: bodyTextAlign
};

export default AppThemeBodyProps;