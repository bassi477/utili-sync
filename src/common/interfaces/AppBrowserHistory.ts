export interface IAppBrowserHistory {
  name: string;
  url: string;
  icon: string | undefined;
  createdAt: Date;
}

export type TAppBrowserHistory = Record<string, IAppBrowserHistory>;
