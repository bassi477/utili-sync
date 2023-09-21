import {Text, StyleSheet} from 'react-native';

export type AppBaseProps = {};

const styles = StyleSheet.create({
  text: {},
});

export function AppBase(props: AppBaseProps) {
  return <Text style={styles.text}>{'Hello from the Bits world.'}</Text>;
}
