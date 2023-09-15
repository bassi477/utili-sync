import {PropsWithChildren} from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import AppTheme from '../../theme/AppTheme';

const highlightTheme = AppTheme['button']['core']['highlight'];
const highlightStyle = highlightTheme['style'];

type TAppButtonCore = PropsWithChildren<{
  action: () => void;
}>;

function AppButtonCore(props: TAppButtonCore): React.JSX.Element {
  return (
    <TouchableHighlight
      activeOpacity={highlightTheme.activeOpacity}
      underlayColor={highlightTheme.underlayColor}
      onPress={props.action}
      style={appButtonCoreStyles.btnCoreHighlight}>
      {props.children}
    </TouchableHighlight>
  );
};

const appButtonCoreStyles = StyleSheet.create({
  btnCoreHighlight: highlightStyle,
});

export default AppButtonCore;
