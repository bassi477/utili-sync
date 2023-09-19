export interface IAppBrowserBookmarkCore {
  id: string;
  name: string;
  icon: string | undefined;
  createdAt: Date;
  updatedAt: Date;
  parentKey: string | undefined;
  type: EAppBrowserBookmarkType;
}

export enum EAppBrowserBookmarkType {
  'LINK' = 'LINK',
  'FOLDER' = 'FOLDER',
}

export type TAppBrowserBookmarkLink = IAppBrowserBookmarkCore & {
  url: string;
};

export type TAppBrowserBookmarkFolder = IAppBrowserBookmarkCore & {
  children: string[];
};

export type TAppBrowserBookmark =
  | TAppBrowserBookmarkLink
  | TAppBrowserBookmarkFolder;

export type TAppBrowserBookmarks = TAppBrowserBookmark[];
