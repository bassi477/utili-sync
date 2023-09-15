import AppButtonCore from './AppButtonCore';
import {IAppIcon} from '../../interfaces/AppIcon';
import AppIcon from '../AppIcon/AppIcon';
import AppTheme from '../../theme/AppTheme';

const iconTheme = AppTheme['icon'];

interface IAppIconButtonProps {
  action: () => void;
  icon: IAppIcon;
  active?: boolean;
  size: number;
}

function AppIconButton(props: IAppIconButtonProps): React.JSX.Element {
  const iconColor = props.active
    ? iconTheme['activeColor']
    : iconTheme['color'];

  return (
    <AppButtonCore action={props.action}>
      <AppIcon
        color={iconColor}
        core={props.icon.core}
        name={props.icon.name}
        size={props.size}
      />
    </AppButtonCore>
  );
}

export default AppIconButton;
