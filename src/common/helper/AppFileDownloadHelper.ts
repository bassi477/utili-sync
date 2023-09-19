import {PermissionsAndroid, Permission, PermissionStatus} from 'react-native';
import RNFetchBlob, {
  Encoding,
  FetchBlobResponse,
  StatefulPromise,
} from 'rn-fetch-blob';
import {
  IAppFileProperties,
  IAppFileRange,
  TAppFileDataType,
  TAppFileRanges,
} from '../interfaces/AppBrowserDownload';
import ApiSauce from './ApiSauceHelper';
import {HEADERS} from 'apisauce';

const headerKeys = {
  length: 'content-length',
  type: 'content-type',
  ranges: 'accept-ranges',
};

const fileStorageDir = `${RNFetchBlob.fs.dirs.DownloadDir}/UtiliSync/Downloads`;
const filePermissions: Permission[] = ['android.permission.POST_NOTIFICATIONS'];

class AppFileDownloadHelper {
  // create a head request to fetch file content information.
  static async requestFileHeaders(url: string) {
    try {
      const response = await ApiSauce.head(url);
      if (!response.ok) throw 'Unable to access file server.';
      const headers = response.headers ?? {};
      const hasFileHeaders = AppFileDownloadHelper.hasFileHeaders(headers);
      const {hasLength, hasRanges, hasType} = hasFileHeaders;
      if (!hasLength || !hasType) throw 'Invalid file.';
      const fileHeaders = AppFileDownloadHelper.extractFileHeaders(headers);
      const {ranges, size, type} = fileHeaders;
      if (Number.isNaN(size) || size === 0) throw 'Empty file.';
      if (!type || type.trim().length === 0) throw 'Unknown file type.';
      let fileProps: IAppFileProperties = {type, size};
      if (hasRanges && ranges.trim().length > 0 && ranges !== 'none')
        fileProps['acceptedRange'] = ranges;
      return fileProps;
    } catch (e) {
      AppFileDownloadHelper.logError(e);
      // TODO create error handler to log error and show notification to user.
      // TODO integrate error handler to try catch blocks.
    }
  }

  static hasFileHeaders(headers: HEADERS) {
    return {
      hasLength: headers[headerKeys.length] !== null,
      hasType: headers[headerKeys.type] !== null,
      hasRanges: headers[headerKeys.ranges] !== null,
    };
  }

  static extractFileHeaders(headers: HEADERS) {
    return {
      size: Number(headers[headerKeys.length]),
      type: String(headers[headerKeys.type]),
      ranges: String(headers[headerKeys.ranges]),
    };
  }

  static async checkPermissions(permissions: Permission[]) {
    let result: {[key: string]: boolean} = {};
    for (let i = 0; i < permissions.length; i++) {
      const permission = permissions[i];
      const granted = await PermissionsAndroid.check(permission);
      result = {
        ...result,
        [permission]: granted,
      };
    }
    return result;
  }

  static async requestPermissions(neededPermissions: Permission[]) {
    const permissionsResult = await PermissionsAndroid.requestMultiple(
      neededPermissions,
    );
    let neededPermissionsResult: {[key: string]: PermissionStatus} = {};
    Object.keys(permissionsResult).map(key => {
      if (neededPermissions.includes(key as Permission))
        neededPermissionsResult = {
          ...neededPermissionsResult,
          [key]: permissionsResult[key as Permission],
        };
    });
    return neededPermissionsResult;
  }

  // download the file from url and save it to local storage.
  static async createDownloadRequest(url: string) {
    try {
      const arePermissionsGranted =
        await AppFileDownloadHelper.checkPermissions(filePermissions);
      const neededPermissions = Object.keys(arePermissionsGranted).filter(
        key => arePermissionsGranted[key] === false,
      ) as Permission[];
      if (neededPermissions.length > 0) {
        const permissionsResult =
          await AppFileDownloadHelper.requestPermissions(neededPermissions);
        const deniedPermissions = Object.keys(permissionsResult).filter(
          key => permissionsResult[key] !== 'granted',
        );
        if (deniedPermissions.length > 0) return;
      }

      const fileHeaders = await AppFileDownloadHelper.requestFileHeaders(url);
        if (!fileHeaders) throw 'Failed to process file headers.';
        const isLargeFile = AppFileDownloadHelper.isLargeFile(fileHeaders.size),
          canUseRange = fileHeaders.acceptedRange && isLargeFile,
          ranges = AppFileDownloadHelper.createFileRanges(
            fileHeaders.size,
            canUseRange ? 4 : 1,
          );
        return {
          ranges,
          fileProps: fileHeaders,
          rangePromises: AppFileDownloadHelper.createRangeRequests(
            url,
            ranges,
            fileHeaders,
          ),
        };
    } catch (e) {
      AppFileDownloadHelper.logError(e);
    }
  }

  // create a list of requests based on ranges
  static createRangeRequests(
    url: string,
    ranges: TAppFileRanges,
    fileProps: IAppFileProperties,
  ) {
    const rangeKeys = Object.keys(ranges);
    return rangeKeys.map(rangeKey => {
      const range = ranges[rangeKey];
      return AppFileDownloadHelper.createRangeRequest(url, range, fileProps);
    });
  }

  /**
   *
   * @param url The URL used for downloading.
   * @param range The range to request from server.
   * @param acceptedRange The accepted range type.
   * @returns
   */
  static createRangeRequest(
    url: string,
    range: IAppFileRange,
    fileProps: IAppFileProperties,
  ) {
    const rangeHeader = `${fileProps.acceptedRange}=${range.start}-${range.end}`;
    // PermissionsAndroid.PERMISSIONS
    const downloadResponsePromise = RNFetchBlob.config({
      appendExt: 'tmpDownload',
    }).fetch('GET', url, {
      Range: fileProps.acceptedRange ? rangeHeader : '',
      'Content-Type': fileProps.type,
      Accept: fileProps.type,
    });
    return {
      range,
      promise: downloadResponsePromise,
    };
  }

  /**
   *
   * TODO in premium: calculate max allowed connections with server and based on
   * * file size, can be enabled/disabled from browser settings.
   * * premium has all basic features included.
   * TODO in basic: max allowed connections 4-5 configurable from browser settings
   * split total size into ranges based on max connections.
   */
  static createRangeKey = (start: number, end: number) =>
    `range-${start}-${end}`;

  static createFileRanges(size: number, maxConnections: number = 4) {
    let result: TAppFileRanges = {};
    let prevRangeEnd = 0;
    let rangeLength = size / maxConnections;
    rangeLength = Math.ceil(rangeLength);
    // calculate ranges
    for (let i = 0; i < maxConnections; i++) {
      const start = prevRangeEnd + 1;
      let end = start + (rangeLength - 1);
      if (end >= size) end = size;
      const rangeKey = AppFileDownloadHelper.createRangeKey(start, end);
      const range: IAppFileRange = {
        start,
        end,
        position: i,
        progress: 0,
        data: undefined,
        status: 'in-progress',
      };
      result = {
        ...result,
        [rangeKey]: range,
      };
      prevRangeEnd = end;
    }
    return result;
  }

  // save file to storage.
  static async saveFile(fileData: TAppFileDataType, encoding: Encoding) {
    await AppFileDownloadHelper.verifyDirectory();
    const extension = 'jpg';
    let name = 'download';
    let fileExists = await AppFileDownloadHelper.verifyFileExists(
      `${name}.${extension}`,
    );
    let index = 0;
    while (fileExists) {
      name = `${name} - ${index}`;
      fileExists = await AppFileDownloadHelper.verifyFileExists(
        `${name}.${extension}`,
      );
    }
    const path = `${fileStorageDir}/${name}.${extension}`;
    await RNFetchBlob.fs.createFile(path, fileData, encoding);
  }

  // verify if file already exists with the name.
  static async verifyFileExists(name: string) {
    return await RNFetchBlob.fs.exists(`${fileStorageDir}/${name}`);
  }

  // verify if directory is created.
  static async verifyDirectory() {
    const isDir = await RNFetchBlob.fs.isDir(fileStorageDir);
    if (!isDir) {
      await RNFetchBlob.fs.mkdir(fileStorageDir);
    }
  }

  // check if the file is large.
  static isLargeFile(size: number) {
    const sizeThresh = 10 * 1024 * 1024;
    return size > sizeThresh;
  }

  // temporary error log generator
  static logError(e: unknown) {
    let error = e as Error;
    console.log(`${error.name}: ${error.message}`);
  }
}

export default AppFileDownloadHelper;
