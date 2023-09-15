import {Text, TouchableHighlight, View} from 'react-native';
import AppIcon from '../../../../../../../common/components/AppIcon/AppIcon';
import AppTheme from '../../../../../../../common/theme/AppTheme';
import AppIconCatalog from '../../../../../../../common/icons/AppIconCatalog';
import {IBrowserWebTab} from '../../../../../../../Core/interfaces/Utility/Browser';

interface IBrowserHomeTabProps {
  onChange: () => void;
  onClose: () => void;
  name: string;
}

const appThemeComponent = AppTheme['component'],
  borderRadius = appThemeComponent['borderRadius']['normal'],
  borderColor = appThemeComponent['border']['color'],
  borderWidth = appThemeComponent['border']['widths'][2],
  browserIcons = AppIconCatalog['utilities']['browser'],
  colorGray = AppTheme['colors']['gray'],
  colorGray800 = colorGray['gray800'],
  iconSizes = AppTheme['icon']['sizes'],
  closeIcon = browserIcons['common']['close'],
  webIcon = browserIcons['common']['web'];

function BrowserHomeTab(props: IBrowserHomeTabProps): React.JSX.Element {
  return (
    <View
      style={{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 2,
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}>
      <TouchableHighlight
        style={{flex: 1, flexDirection: 'row'}}
        onPress={props.onChange}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 0,
              flexDirection: 'column',
              marginEnd: 4,
              padding: 4,
              paddingEnd: 8,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightColor: borderColor,
              borderRightWidth: borderWidth,
            }}>
            <AppIcon
              name={webIcon.name}
              color={colorGray800}
              core={webIcon.core}
              size={iconSizes['md']}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text>{props.name}</Text>
          </View>
        </View>
      </TouchableHighlight>

      <View
        style={{
          borderLeftColor: borderColor,
          borderLeftWidth: borderWidth,
          // marginStart: 2, padding: 2,
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableHighlight onPress={props.onClose}>
          <AppIcon
            color={colorGray800}
            name={closeIcon.name}
            core={closeIcon.core}
            size={iconSizes['xs']}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default BrowserHomeTab;
