import {PropsWithChildren} from 'react';
import {StyleSheet, Pressable, GestureResponderEvent} from 'react-native';

export type AppButtonBaseProps = PropsWithChildren<{
  /**
   * an action to be performed by the button.
   */
  action: (event: GestureResponderEvent) => void;
}>;

const styles = StyleSheet.create({
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function AppButtonBase({action, children}: AppButtonBaseProps) {
  return (
    <Pressable
      style={styles.pressable}
      // activeOpacity={highlightTheme.activeOpacity}
      // underlayColor={highlightTheme.underlayColor}
      onPress={action}>
      {children}
    </Pressable>
  );
}
