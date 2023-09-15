import AppThemeBodyProps from '../../Core/constants/resources/Body';
import AppThemeButtonProps from '../../Core/constants/resources/Buttons';
import AppThemeColorProps from '../../Core/constants/resources/Colors';
import AppThemeComponentProps from '../../Core/constants/resources/Components';
import AppThemeContainerProps from '../../Core/constants/resources/Container';
import AppThemeFontProps from '../../Core/constants/resources/Fonts';
import AppThemeHeadingProps from '../../Core/constants/resources/Heading';
import AppThemeLinkProps from '../../Core/constants/resources/Link';
import AppThemeNavProps from '../../Core/constants/resources/Nav';
import AppThemeParagraphProps from '../../Core/constants/resources/Paragraph';
import AppThemeSpacingProps from '../../Core/constants/resources/Spacing';
import AppThemeZIndexProps from '../../Core/constants/resources/ZIndex';
import AppThemeButton from './Button';
import AppThemeColor from './Color';
import AppThemeIcon from './Icon';
import AppThemeSpacing from './Spacing';

const AppTheme = {
  colors: AppThemeColor,
  spacing: AppThemeSpacing,
  navigation: AppThemeNavProps,
  font: AppThemeFontProps,
  button: AppThemeButton,
  container: AppThemeContainerProps,
  component: AppThemeComponentProps,
  body: AppThemeBodyProps,
  link: AppThemeLinkProps,
  paragraph: AppThemeParagraphProps,
  heading: AppThemeHeadingProps,
  zIndex: AppThemeZIndexProps,
  icon: AppThemeIcon,
};

export default AppTheme;
