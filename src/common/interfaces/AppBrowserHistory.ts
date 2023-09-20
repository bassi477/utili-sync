export interface IAppBrowserHistory {
  id: string;
  name: string;
  url: string;
  icon: string | undefined;
  createdAt: Date;
}

export type TAppBrowserHistory = IAppBrowserHistory[];
