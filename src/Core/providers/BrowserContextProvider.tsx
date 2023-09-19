import {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {
  IBrowserWebTab,
  TBrowserNavTabsContentKey,
  TBrowserWebTabs,
} from '../interfaces/Utility/Browser';
import uuid from 'react-native-uuid';
import {TAppBrowserDownloads} from '../../common/interfaces/AppBrowserDownload';
import AppFileDownloadHelper from '../../common/helper/AppFileDownloadHelper';
import RNFetchBlob from 'rn-fetch-blob';
import {TAppBrowserBookmarks} from '../../common/interfaces/AppBrowserBookmark';
import {TAppBrowserHistory} from '../../common/interfaces/AppBrowserHistory';
// import { Notification, Notifications } from 'react-native-notifications';

type TReactStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

interface IBrowserContext {
  currentNavTabKey: TBrowserNavTabsContentKey;
  setCurrentNavTabKey: TReactStateAction<TBrowserNavTabsContentKey>;
  webTabs: TBrowserWebTabs;
  setWebTabs: TReactStateAction<TBrowserWebTabs>;
  currentWebTabKey: string | undefined;
  setCurrentWebTabKey: TReactStateAction<string | undefined>;
  isWebTabsDrawerOpen: boolean;
  setWebTabsDrawerOpen: TReactStateAction<boolean>;
  fileDownloads: TAppBrowserDownloads;
  setFileDownloads: TReactStateAction<TAppBrowserDownloads>;
  bookmarks: TAppBrowserBookmarks;
  setBookmarks: TReactStateAction<TAppBrowserBookmarks>;
  history: TAppBrowserHistory;
  setHistory: TReactStateAction<TAppBrowserHistory>;
}

type TBrowserContextProviderProps = PropsWithChildren<{}>;

// Notifications.setNotificationChannel({

//   channelId: 'utili-sync-notification-channel-identifier',
//   name: 'UtiliSync Notification Channel',
//   importance: 5,
//   description: 'Notifies about browser downloads.',
//   enableLights: true,
//   enableVibration: true,
//   // groupId: 'my-group', // optional
//   // groupName: 'My Group', // optional, will be presented in Android OS notification permission
//   showBadge: false,
//   // soundFile: 'custom_sound.mp3',  // place this in <project_root>/android/app/src/main/res/raw/custom_sound.mp3
//   vibrationPattern: [200, 1000, 500, 1000, 500],
// })

const initialTabUuid = uuid.v4().toString();
const initialTab: IBrowserWebTab = {
  historyStack: [],
  name: 'Home',
  url: undefined,
  nextTab: undefined,
  previousTab: undefined,
};

export const BrowserContext = createContext<IBrowserContext>({
  currentNavTabKey: 'home',
  setCurrentNavTabKey: () => {},
  currentWebTabKey: initialTabUuid,
  setCurrentWebTabKey: () => {},
  webTabs: {[initialTabUuid]: initialTab},
  setWebTabs: () => {},
  isWebTabsDrawerOpen: false,
  setWebTabsDrawerOpen: () => {},
  fileDownloads: {},
  setFileDownloads: () => {},
  bookmarks: [],
  setBookmarks: () => {},
  history: {},
  setHistory: () => {},
});

function BrowserContextProvider(
  props: TBrowserContextProviderProps,
): React.JSX.Element {
  const [currentNavTabKey, setCurrentNavTabKey] =
    useState<TBrowserNavTabsContentKey>('home');
  const [webTabs, setWebTabs] = useState<TBrowserWebTabs>({
    [initialTabUuid]: initialTab,
  });
  const [currentWebTabKey, setCurrentWebTabKey] = useState<string | undefined>(
    initialTabUuid,
  );
  const [isWebTabsDrawerOpen, setWebTabsDrawerOpen] = useState<boolean>(false);
  const [fileDownloads, setFileDownloads] = useState<TAppBrowserDownloads>({});
  const [bookmarks, setBookmarks] = useState<TAppBrowserBookmarks>([]);
  const [history, setHistory] = useState<TAppBrowserHistory>({});

  useEffect(() => {
    const downloadKeys = Object.keys(fileDownloads);
    const isDownloadsEmpty = !downloadKeys || downloadKeys.length === 0;

    const onFileRangeProgress = (
      fileKey: string,
      rangeKey: string,
      progress: number,
    ) => {
      setFileDownloads(prevState => {
        const file = prevState[fileKey];
        const ranges = file['ranges'] ?? {};
        const range = ranges[rangeKey];

        return {
          ...prevState,
          [fileKey]: {
            ...file,
            ranges: {
              ...ranges,
              [rangeKey]: {
                ...range,
                progress: progress,
              },
            },
          },
        };
      });
    };

    // check if we have downloads in queue.
    if (!isDownloadsEmpty) {
      // we have downloads.
      // iterate through downloads to start any pending download.
      Object.keys(fileDownloads).map(fileKey => {
        // retrieve the fileDownload via fileKey
        const fileDownload = fileDownloads[fileKey];
        const url = fileDownload['url'];
        if (fileDownload['status'] === 'new') {
          // initiate the file download request.
          AppFileDownloadHelper.createDownloadRequest(url)
            .then(downloadRequest => {
              if (downloadRequest) {
                setFileDownloads(prevState => {
                  const file = prevState[fileKey];
                  return {
                    ...prevState,
                    [fileKey]: {
                      ...file,
                      ranges: downloadRequest.ranges,
                      status: 'in-progress',
                    },
                  };
                });

                console.log(downloadRequest);

                const updatedRangePromises = downloadRequest.rangePromises.map(
                  rangePromise => {
                    let promise = rangePromise.promise,
                      start = rangePromise.range.start,
                      end = rangePromise.range.end,
                      position = rangePromise.range.position,
                      rangeKey = AppFileDownloadHelper.createRangeKey(
                        start,
                        end,
                      );
                    promise.progress((received, total) =>
                      onFileRangeProgress(
                        fileKey,
                        rangeKey,
                        Math.ceil((received / total) * 100),
                      ),
                    );
                    promise.catch(error => {
                      AppFileDownloadHelper.logError(error);
                      setFileDownloads(prevState => {
                        const file = prevState[fileKey];
                        const ranges = file['ranges'] ?? {};
                        const range = ranges[rangeKey];
                        return {
                          ...prevState,
                          [fileKey]: {
                            ...file,
                            ranges: {
                              ...ranges,
                              [rangeKey]: {
                                ...range,
                                status: 'error',
                              },
                            },
                          },
                        };
                      });
                    });
                    return promise.then(blobResponse => {
                      const responseInfo = blobResponse.info();
                      // console.log(blobResponse);
                      // console.log(responseInfo);
                      // console.log(blobResponse.respInfo);
                      // console.log(blobResponse.type);
                      // console.log(blobResponse.base64());
                      // console.log(blobResponse.data);
                      // console.log(blobResponse.data == blobResponse.base64());
                      // console.log(blobResponse.data === blobResponse.base64());
                      if ([206, 200].includes(responseInfo.status)) {
                        setFileDownloads(prevState => {
                          const file = prevState[fileKey];
                          const ranges = file['ranges'] ?? {};
                          const range = ranges[rangeKey];
                          return {
                            ...prevState,
                            [fileKey]: {
                              ...file,
                              ranges: {
                                ...ranges,
                                [rangeKey]: {
                                  ...range,
                                  data: RNFetchBlob.base64.decode(
                                    blobResponse.base64(),
                                  ),
                                  status: 'success',
                                },
                              },
                            },
                          };
                        });

                        return {
                          blobResponse,
                          fileKey,
                          rangeKey,
                          position,
                          encoding: blobResponse.type,
                        };
                      }
                    });
                  },
                );

                Promise.all(updatedRangePromises).then(result => {
                  let tempRangesData: string[] = [];
                  let mainKey = '';
                  let file = '';
                  console.log(result);
                  result.map(rangeResult => {
                    if (!rangeResult) return;
                    mainKey = String(rangeResult.fileKey);
                    // const subKey = String(rangeResult.rangeKey);
                    const position = Number(rangeResult.position);
                    tempRangesData[position] = RNFetchBlob.base64.decode(
                      rangeResult.blobResponse.base64(),
                    );
                  });
                  console.log(tempRangesData);
                  file = tempRangesData.join('');
                  AppFileDownloadHelper.saveFile(
                    RNFetchBlob.base64.encode(file),
                    'base64',
                  ).then(() => {
                    // give toast to user and create a notification.
                    //   let localNotification = Notifications.postLocalNotification({
                    //     body: "File downloaded successfully",
                    //     title: 'UtiliSync Browser',
                    //     sound: '',
                    //     badge: 1,
                    //     identifier: uuid.v4().toString(),
                    //     payload: {},
                    //     thread: '',
                    //     type: '',
                    // });
                    setFileDownloads(prevState => {
                      const file = prevState[mainKey];
                      return {
                        ...prevState,
                        [mainKey]: {
                          ...file,
                          status: 'success',
                        },
                      };
                    });
                  });
                });
              }
            })
            .catch(error => console.log(error.message));
        }
      });
    }
  }, [fileDownloads]);

  return (
    <BrowserContext.Provider
      value={{
        currentNavTabKey,
        setCurrentNavTabKey,
        currentWebTabKey,
        setCurrentWebTabKey,
        webTabs,
        setWebTabs,
        isWebTabsDrawerOpen,
        setWebTabsDrawerOpen,
        fileDownloads,
        setFileDownloads,
        bookmarks,
        setBookmarks,
        history,
        setHistory,
      }}>
      {props.children}
    </BrowserContext.Provider>
  );
}

export default BrowserContextProvider;
