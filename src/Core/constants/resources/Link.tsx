import AppThemeColorPropsHelper from "../../helpers/AppThemeColorPropsHelper";
import { AppThemeCoreColorProps } from "./Colors";

// Links
//
// Style anchor elements.

// Imports
const appThemeColorPrimary = AppThemeCoreColorProps.primary;
// anchor - [color, decoration, shade, hover, ZIndex]
const linkColor = appThemeColorPrimary;
const linkDecoration = 'underline';
const linkShadePercentage = 0.2;
const linkHoverColor = AppThemeColorPropsHelper.shiftColor(linkColor, linkShadePercentage);
const linkHoverDecoration = null;
const stretchedLinkPseudoElement = 'after';
const stretchedLinkZIndex = 1;

const AppThemeLinkProps = {
    color: linkColor,
    decoration: linkDecoration,
    shadePercentage: linkShadePercentage,
    hover: {
        color: linkHoverColor,
        decoration: linkHoverDecoration
    },
    stretched: {
        pseudoElement: stretchedLinkPseudoElement,
        zIndex: stretchedLinkZIndex
    }
};

export default AppThemeLinkProps;