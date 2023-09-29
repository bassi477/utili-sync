/**
* this env extends node-env version 1.0.17.
* to inspect its config @see https://bit.cloud/teambit/node/node?version=1.0.17
* */
import { NodeEnv } from '@teambit/node.node';
import { Compiler } from "@teambit/compiler";
import { EnvHandler } from "@teambit/envs";
import { Pipeline } from '@teambit/builder';
import {
 TypescriptCompiler,
 resolveTypes,
 TypescriptTask,
 TypescriptConfigWriter
} from "@teambit/typescript.typescript-compiler";
import { ESLintLinter, EslintTask, EslintConfigWriter } from "@teambit/defender.eslint-linter";
import { JestTask, JestTester } from "@teambit/defender.jest-tester";
import { PrettierFormatter, PrettierConfigWriter } from "@teambit/defender.prettier-formatter";
import { Tester } from "@teambit/tester";
import { ConfigWriterList } from '@teambit/workspace-config-files';

export class NodeBaseEnv extends NodeEnv {
 /* shorthand name for the environment */
 name = "node-base-env";

 /* the compiler to use during development */
 compiler(): EnvHandler<Compiler> {
   /**
    * @see https://bit.dev/reference/typescript/using-typescript
    */
   return TypescriptCompiler.from({
     tsconfig: this.tsconfigPath,
     types: resolveTypes(__dirname, [this.tsTypesPath]),
   });
 }

 /* the test runner to use during development */
 tester(): EnvHandler<Tester> {
   /**
    * @see https://bit.dev/reference/jest/using-jest
    */
   return JestTester.from({
     config: this.jestConfigPath,
   });
 }

 /* the linter to use during development */
 linter() {
   /**
    * @see https://bit.dev/reference/eslint/using-eslint
    */
   return ESLintLinter.from({
     tsconfig: this.tsconfigPath,
     configPath: this.eslintConfigPath,
     pluginsPath: __dirname,
     extensions: this.eslintExtensions,
   });
 }

 /**
  * the formatter to use during development
  * (source files are not formatted as part of the components' build)
  */
 formatter() {
   /**
    * @see https://bit.dev/reference/prettier/using-prettier
    */
   return PrettierFormatter.from({
     configPath: this.prettierConfigPath,
   });
 }

 /**
  * a set of processes to be performed before a component is snapped, during its build phase
  * @see https://bit.dev/docs/node-env/build-pipelines
  */
 build() {
   return Pipeline.from([
     TypescriptTask.from({
       tsconfig: this.tsconfigPath,
       types: resolveTypes(__dirname, [this.tsTypesPath]),
     }),
     EslintTask.from({
       tsconfig: this.tsconfigPath,
       configPath: this.eslintConfigPath,
       pluginsPath: __dirname,
       extensions: this.eslintExtensions,
     }),
     JestTask.from({ config: this.jestConfigPath }),
   ]);
 }

 workspaceConfig(): ConfigWriterList {
   return ConfigWriterList.from([
     TypescriptConfigWriter.from({
       tsconfig: this.tsconfigPath,
       types: resolveTypes(__dirname, [this.tsTypesPath]),
     }),
     EslintConfigWriter.from({
       configPath: this.eslintConfigPath,
       tsconfig: this.tsconfigPath,
     }),
     PrettierConfigWriter.from({
       configPath: this.prettierConfigPath,
     })
   ]);
 }
}

export default new NodeBaseEnv();