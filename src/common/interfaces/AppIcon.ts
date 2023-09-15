import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {Icon} from 'react-native-vector-icons/Icon';

export interface IAppIcon {
  core: typeof Icon | typeof FontAwesome6Icon;
  name: string;
}
