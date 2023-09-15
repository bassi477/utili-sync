import {IAppIcon} from '../../interfaces/AppIcon';

type TAppIconProps = IAppIcon & {
  color: string;
  size: number;
};

function AppIcon(props: TAppIconProps): React.JSX.Element {
  const IconCore = props.core;

  return <IconCore name={props.name} color={props.color} size={props.size} />;
}

export default AppIcon;
