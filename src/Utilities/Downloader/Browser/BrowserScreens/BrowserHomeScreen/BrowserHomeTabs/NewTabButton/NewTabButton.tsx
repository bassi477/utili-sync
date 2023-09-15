import {Text, View} from 'react-native';
import AppButtonCore from '../../../../../../../common/components/AppButton/AppButtonCore';
import AppIconCatalog from '../../../../../../../common/icons/AppIconCatalog';
import AppTheme from '../../../../../../../common/theme/AppTheme';
import AppIcon from '../../../../../../../common/components/AppIcon/AppIcon';

interface INewTabButtonProps {
  action: () => void;
}

const browserIcons = AppIconCatalog['utilities']['browser'],
  webTabTheme = AppTheme['button']['browser']['webTab'],
  newTabTheme = webTabTheme['newTab'],
  addIcon = browserIcons['tab']['add'];

function NewTabButton(props: INewTabButtonProps): React.JSX.Element {
  return (
    <View style={newTabTheme['container']}>
      <AppButtonCore action={props.action}>
        <View style={newTabTheme['inner']}>
          <AppIcon
            name={addIcon.name}
            core={addIcon.core}
            color={newTabTheme['icon']['color']}
            size={newTabTheme['icon']['size']}
          />
          <Text style={newTabTheme['text']}>New Tab</Text>
        </View>
      </AppButtonCore>
    </View>
  );
}

export default NewTabButton;
