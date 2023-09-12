import { PropsWithChildren, createContext, useRef, useState } from "react";
import WebViewCore from "../components/WebViewCore/WebViewCore";
import WebView, { WebViewNavigation } from "react-native-webview";
import { Text } from "react-native";
import { FileDownloadEvent, WebViewErrorEvent, WebViewNavigationEvent, WebViewProgressEvent } from "react-native-webview/lib/WebViewTypes";

interface IBrowserHomeContext {
    webView: React.JSX.Element | undefined;
    isLoadProgrss: boolean;
    loadProgress: number;
    reload: () => void;
    goBack: () => void;
    goForward: () => void;
};

type TBrowserHomeContextProviderProps = PropsWithChildren<{
    uri: string;
    onNavigationStateChange: (event: WebViewNavigation) => void
}>;

type TWebViewRef = WebView<{}> | null;

export const BrowserHomeContext = createContext<IBrowserHomeContext>({
    webView: undefined,
    isLoadProgrss: true,
    loadProgress: 0,
    goBack: () => { },
    goForward: () => { },
    reload: () => { },
});


// TODO Set a loader here so it shows loader while the webView loads. 
function BrowserHomeContextProvider(props: TBrowserHomeContextProviderProps): React.JSX.Element {

    const [isLoadProgrss, setIsLoadProgress] = useState<boolean>(true);
    const [loadProgress, setLoadProgress] = useState<number>(0);
    const webViewRef = useRef<TWebViewRef>();

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
        e.nativeEvent.downloadUrl;
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

    const webView = <WebViewCore
        webViewRef={webViewRef}
        uri={props.uri}
        renderLoading={() => <Text>Loading</Text>}
        renderError={() => <Text>Error</Text>}
        onFileDownload={onFileDownload}
        onLoadStart={onLoadStart}
        onLoadProgress={onLoadProgress}
        onLoadEnd={onLoadEnd}
        onNavigationStateChange={props.onNavigationStateChange} />

    return (
        <BrowserHomeContext.Provider value={{
            webView,
            goBack,
            goForward,
            reload,
            isLoadProgrss,
            loadProgress
        }}>
            {props.children}
        </BrowserHomeContext.Provider>
    );
}

export default BrowserHomeContextProvider;