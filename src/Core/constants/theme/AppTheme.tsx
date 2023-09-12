import AppThemeBodyProps from "../resources/Body";
import AppThemeButtonProps from "../resources/Buttons";
import AppThemeColorProps from "../resources/Colors";
import AppThemeComponentProps from "../resources/Components";
import AppThemeContainerProps from "../resources/Container";
import AppThemeFontProps from "../resources/Fonts";
import AppThemeHeadingProps from "../resources/Heading";
import AppThemeLinkProps from "../resources/Link";
import AppThemeNavProps from "../resources/Nav";
import AppThemeParagraphProps from "../resources/Paragraph";
import AppThemeSpacingProps from "../resources/Spacing";
import AppThemeZIndexProps from "../resources/ZIndex";

const AppTheme = {
    colors: AppThemeColorProps,
    spacing: {
        spacerBase: AppThemeSpacingProps.spacerBase,
        spacer: AppThemeSpacingProps.spacer
    },
    navigation: AppThemeNavProps,
    font: AppThemeFontProps,
    button: AppThemeButtonProps,
    container: AppThemeContainerProps,
    component: AppThemeComponentProps,
    body: AppThemeBodyProps,
    link: AppThemeLinkProps,
    paragraph: AppThemeParagraphProps,
    heading: AppThemeHeadingProps,
    zIndex: AppThemeZIndexProps
};

export default AppTheme;