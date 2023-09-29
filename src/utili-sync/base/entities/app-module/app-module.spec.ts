import { appModule } from './app-module';

it('should return the correct value', () => {
  expect(appModule()).toBe('Hello world!');
});
