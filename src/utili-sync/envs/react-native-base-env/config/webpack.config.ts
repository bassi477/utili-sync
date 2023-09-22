import type { WebpackConfigMutator, WebpackConfigTransformContext } from '@teambit/webpack';
import { reactNativeBaseWebpackTransformer } from '@teambit/react.react-native-env';

/**
 * modifies the webpack config for the components preview bundle.
 * @see https://bit.dev/reference/webpack/webpack-config
 */
export const webpackTransformer = (
  configMutator: WebpackConfigMutator, 
  _context: WebpackConfigTransformContext
): WebpackConfigMutator => {
  // apply the base react-native transformer - remove this if you want to totally customize your webpack configuration
  // but make sure you're certain your configuration covers everything you need
  // otherwise it's better to just override the base config by adding whichever config transformations you need after this base configuration
  reactNativeBaseWebpackTransformer(configMutator, _context);
  return configMutator;
}