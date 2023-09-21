import { Text, StyleSheet } from 'react-native';

export type AppButtonBaseProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

const styles = StyleSheet.create({
  text: {},
});

export function AppButtonBase({ text }: AppButtonBaseProps) {
  return (
    <Text style={styles.text}>
      {text}
    </Text>
  );
}

