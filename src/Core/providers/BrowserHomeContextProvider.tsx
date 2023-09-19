import {PropsWithChildren, createContext, useRef, useState} from 'react';
import WebViewCore from '../components/WebViewCore/WebViewCore';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {Text} from 'react-native';
import {
  FileDownloadEvent,
  ShouldStartLoadRequest,
  WebViewErrorEvent,
  WebViewNavigationEvent,
  WebViewProgressEvent,
} from 'react-native-webview/lib/WebViewTypes';
import {TAppBrowserDownloads} from '../../common/interfaces/AppBrowserDownload';
import uuid from 'react-native-uuid';

interface IBrowserHomeContext {
  webView: React.JSX.Element | undefined;
  isLoadProgress: boolean;
  loadProgress: number;
  reload: () => void;
  goBack: () => void;
  goForward: () => void;
}

type TBrowserHomeContextProviderProps = PropsWithChildren<{
  uri: string;
  onNavigationStateChange: (event: WebViewNavigation) => void;
  setFileDownloads: React.Dispatch<React.SetStateAction<TAppBrowserDownloads>>;
}>;

type TWebViewRef = WebView<{}> | null;

export const BrowserHomeContext = createContext<IBrowserHomeContext>({
  webView: undefined,
  isLoadProgress: true,
  loadProgress: 0,
  goBack: () => {},
  goForward: () => {},
  reload: () => {},
});

// TODO Set a loader here so it shows loader while the webView loads.
function BrowserHomeContextProvider(
  props: TBrowserHomeContextProviderProps,
): React.JSX.Element {
  const [isLoadProgress, setIsLoadProgress] = useState<boolean>(true);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const webViewRef = useRef<TWebViewRef>();

  const isUrlFIle = (url: string) => {
    url = new URL(url).href;
    if (url.endsWith('/')) url = url.substring(0, url.length - 1);
    const splitValue = url.split('/');
    if (splitValue) {
      const lastValue = splitValue.pop();
      const indexOfValue = lastValue?.indexOf('.');
      return indexOfValue && indexOfValue > 0;
    }
    return false;
  };

  const onLoadStart = (e: WebViewNavigationEvent) => {
    setIsLoadProgress(true);
  };

  const onLoadProgress = (e: WebViewProgressEvent) => {
    setLoadProgress(e.nativeEvent.progress);
  };

  const onLoadEnd = (e: WebViewNavigationEvent | WebViewErrorEvent) => {
    setIsLoadProgress(false);
  };

  const onFileDownload = (e: FileDownloadEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('On DOWNLOAD');
    const url = e['nativeEvent']['downloadUrl'];
  };

  const onShouldStartLoadRequest = (e: ShouldStartLoadRequest) => {
    console.log('onShouldStartLoadRequest called');
    const url = e['url'];
    const isFile = isUrlFIle(url);
    if (isFile) {
      const newUuid = uuid.v4().toString();
      props.setFileDownloads(prevState => ({
        ...prevState,
        [newUuid]: {
          url,
          name: undefined,
          ranges: {},
          status: 'new',
        },
      }));
      return false;
    }
    return true;
  };

  const reload = () => {
    if (webViewRef.current) webViewRef.current.reload();
  };

  const goBack = () => {
    if (webViewRef.current) webViewRef.current.goBack();
  };

  const goForward = () => {
    if (webViewRef.current) webViewRef.current.goForward();
  };

  const webView = (
    <WebViewCore
      webViewRef={webViewRef}
      uri={props.uri}
      onShouldStartLoadRequest={onShouldStartLoadRequest}
      renderLoading={() => <Text>Loading</Text>}
      renderError={() => <Text>Error</Text>}
      onFileDownload={onFileDownload}
      onLoadStart={onLoadStart}
      onLoadProgress={onLoadProgress}
      onLoadEnd={onLoadEnd}
      onNavigationStateChange={props.onNavigationStateChange}
    />
  );

  return (
    <BrowserHomeContext.Provider
      value={{
        webView,
        goBack,
        goForward,
        reload,
        isLoadProgress,
        loadProgress,
      }}>
      {props.children}
    </BrowserHomeContext.Provider>
  );
}

export default BrowserHomeContextProvider;
