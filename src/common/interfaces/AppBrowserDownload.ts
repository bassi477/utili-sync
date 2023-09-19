export interface IAppBrowserDownload {
  name: string | undefined;
  url: string;
  // size: number | undefined;
  ranges: TAppFileRanges | undefined;
  // bufferSize: number | undefined;
  // encoding: string | undefined;
  status: TAppBrowserDownloadStatus;
}

export type TAppBrowserDownloadStatus =
  | 'new'
  | 'in-progress'
  | 'success'
  | 'error';

export type TAppBrowserDownloads = Record<string, IAppBrowserDownload>;

export interface IAppFileProperties {
  acceptedRange?: string;
  size: number;
  type: string;
}
export type TAppFileDataType = string | Object | any | undefined;
export type TAppBrowserRangeDownloadStatus =
  | 'in-progress'
  | 'success'
  | 'error';
export interface IAppFileRange {
  position: number;
  start: number;
  end: number;
  progress: number;
  data: TAppFileDataType;
  status: TAppBrowserRangeDownloadStatus;
}
export type TAppFileRanges = Record<string, IAppFileRange>;
