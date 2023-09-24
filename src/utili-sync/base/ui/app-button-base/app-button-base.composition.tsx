import {Text, View} from 'react-native';
import {AppButtonBase} from './app-button-base';

export const BasicUsage = () => (
  <AppButtonBase
    onPress={() => {
      /**
       * Perform action here.
       */
    }}>
    <Text>Button</Text>
  </AppButtonBase>
);

export const StyledExample = () => (
  <AppButtonBase
    style={{
      margin: 10,
      padding: 10,
      paddingHorizontal: 20,
      backgroundColor: '#0d6efd',
      borderColor: '#f8f9fa',
      borderWidth: 1,
      borderRadius: 25,
    }}
    onPress={() => {
      /**
       * Perform action here.
       */
    }}>
    <View style={{flex: 0, flexDirection: 'row'}}>
      <Text style={{color: '#e9ecef'}}>Button</Text>
    </View>
  </AppButtonBase>
);
