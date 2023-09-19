import Reactotron, { openInEditor, overlay } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//   .configure({
//     name: 'UtiliSync',
//   })
//   .useReactNative({
//     // asyncStorage: true, // there are more options to the async storage.
//     networking: {
//       // optionally, you can turn it off with false.
//       ignoreUrls: /symbolicate/,
//     },
//     // editor: true, // there are more options to editor
//     // errors: {veto: stackFrame => false}, // or turn it off with false
//     // overlay: true, // just turning off overlay
//     // devTools: true,
//   })
//   .use(openInEditor())
//   .use(overlay())
//   .connect();

console.disableYellowBox = true

// First, set some configuration settings on how to connect to the app
Reactotron.configure({
  name: 'UtiliSync'
  // host: '10.0.1.1',
  // port: 9091
})

// add every built-in react native feature.  you also have the ability to pass
// an object as a parameter to configure each individual react-native plugin
// if you'd like.
Reactotron.useReactNative({
    asyncStorage: true,
    devTools: true,
    editor: true,
    errors: true,
    networking: true,
    overlay: true
})
Reactotron.setAsyncStorageHandler(AsyncStorage)
// Reactotron.use(openInEditor())
// Reactotron.use(overlay())


// add some more plugins for redux & redux-saga
// Reactotron.use(reduxPlugin())
// Reactotron.use(sagaPlugin())

// if we're running in DEV mode, then let's connect!
if (__DEV__) {
  Reactotron.connect()
  Reactotron.clear()
}

// Reactotron.onCustomCommand('test', () => console.tron.log('This is an example'))

console.tron = Reactotron
