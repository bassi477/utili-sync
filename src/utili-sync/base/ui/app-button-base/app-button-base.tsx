import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

/**
 * React element.
 */
export type ReactElement = React.JSX.Element;

/**
 * React node.
 */
export type ReactNode = React.ReactNode;

/**
 * The action method that is fired when the 'onPress' event is triggered.
 */
export type OnPressActionEvent = (event: GestureResponderEvent) => void;

/**
 * The style prop for the button.
 */
export type ButtonStyleProps = StyleProp<ViewStyle>;

/**
 * The props created and handled on the component.
 */
export interface ButtonPropsWithChildren {
  /**
   * The action method that is fired when the 'onPress' event is triggered.
   */
  onPress: OnPressActionEvent;
  /**
   * Styles for the button container.
   */
  style?: ButtonStyleProps;
  /**
   * Optionally render child components.
   */
  children?: ReactNode;
}

/**
 * The props imported from react-native pressable.
 */
export type ReactNativePressableProps = Omit<PressableProps, 'style'>;

/**
 * The props to add React Ref attributes.
 */
export type ReactRefAttributes = React.RefAttributes<View>;

/**
 * Props that can be passed to the component.
 */
export type AppButtonBaseProps = ButtonPropsWithChildren &
  ReactNativePressableProps &
  ReactRefAttributes;

/**
 * local styles for button base.
 */
const styles = StyleSheet.create({
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/**
 * The component renders a button using the pressable from react-native.
 */
export function AppButtonBase(props: AppButtonBaseProps): ReactElement {
  const {onPress, children = [], style = {}, ...rest} = props;
  return (
    <View
      style={[
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
      ]}>
      <Pressable style={[styles.pressable, style]} onPress={onPress} {...rest}>
        {children}
      </Pressable>
    </View>
  );
}
