/**
 * @see https://bit.dev/reference/jest/jest-config
 */
const {
  jestConfig,
  packagesToExclude: basePackagesToExclude,
} = require('@teambit/react.react-native-env');

const {
  generateNodeModulesPattern,
} = require('@teambit/dependencies.modules.packages-excluder');

const packagesToExclude = [...basePackagesToExclude, 'a-package-to-exclude'];

/**
 * In addition - by default, jest excludes all node_modules from the transform (compilation) process.
 * the following config excludes all node_modules, except for Bit components, style modules, and the packages that are listed.
 */
module.exports = {
  ...jestConfig,
  transformIgnorePatterns: [
    generateNodeModulesPattern({
      packages: packagesToExclude,
      excludeComponents: true,
    }),
    '^.+.module.(css|sass|scss)$',
  ],
};
