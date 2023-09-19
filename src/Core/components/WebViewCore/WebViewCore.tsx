import React from 'react';
import WebView, { WebViewNavigation } from "react-native-webview";
import WebViewCoreStyles from './WebViewCore.stylesheet';
import {
    FileDownloadEvent,
    ShouldStartLoadRequest,
    WebViewErrorEvent,
    WebViewNavigationEvent,
    WebViewProgressEvent
} from 'react-native-webview/lib/WebViewTypes';

interface IWebViewCoreProps {
    uri: string;
    webViewRef: React.MutableRefObject<TWebViewRef | undefined>;
    renderLoading: () => React.JSX.Element;
    renderError: () => React.JSX.Element;
    onNavigationStateChange: (event: WebViewNavigation) => void;
    onLoadStart: (event: WebViewNavigationEvent) => void;
    onLoadEnd: (event: WebViewNavigationEvent | WebViewErrorEvent) => void;
    onLoadProgress: (event: WebViewProgressEvent) => void;
    onFileDownload: (event: FileDownloadEvent) => void;
    onShouldStartLoadRequest: (event: ShouldStartLoadRequest) => boolean
}

type TWebViewRef = WebView<{}> | null;

function WebViewCore(props: IWebViewCoreProps): React.JSX.Element {

    return (
        <WebView
            ref={ref => (props.webViewRef.current = ref)}
            source={{ uri: props.uri }}
            useWebView2
            startInLoadingState
            onShouldStartLoadWithRequest={props.onShouldStartLoadRequest}
            onLoadStart={props.onLoadStart}
            onLoadEnd={props.onLoadEnd}
            onLoadProgress={props.onLoadProgress}
            onFileDownload={props.onFileDownload}
            renderLoading={props.renderLoading}
            renderError={props.renderError}
            onNavigationStateChange={props.onNavigationStateChange}
            style={WebViewCoreStyles.webView} />
    );
};


export default WebViewCore;