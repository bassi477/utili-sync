import {StyleSheet, View} from 'react-native';
import {IAppIcon} from '../../../../../../../common/interfaces/AppIcon';
import AppIconButton from '../../../../../../../common/components/AppButton/AppIconButton';
import AppTheme from '../../../../../../../common/theme/AppTheme';

const iconTheme = AppTheme['icon'];
const buttonTheme = AppTheme['button']['browser']['addressBar'];

interface IAddressBarButtonProps {
  icon: IAppIcon;
  action: () => void;
}

function AddressBarButton(props: IAddressBarButtonProps): React.JSX.Element {
  const iconSize = iconTheme['sizes']['md'];

  return (
    <View style={addressBarButtonStyles.iconContainer}>
      <AppIconButton action={props.action} icon={props.icon} size={iconSize} />
    </View>
  );
}

const addressBarButtonStyles = StyleSheet.create({
  iconContainer: buttonTheme['style'],
});

export default AddressBarButton;
