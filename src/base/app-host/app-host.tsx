import {AppShell} from './app-shell';
import {AppHostContextProvider} from './app-host.context';

export type AppHostProps = {};

export function AppHost() {
  return (
    <AppHostContextProvider>
      <AppShell />
    </AppHostContextProvider>
  );
}
