import React from 'react';
import { View } from 'react-native';
import BrowserNav from './BrowserNav/BrowserNav';
import BrowserStyles from './Browser.stylesheet';
import BrowserContextProvider from '../../../Core/providers/BrowserContextProvider';
import BrowserScreenPresenter from './BrowserScreenPresenter/BrowserScreenPresenter';

enum BrowserDocumentTabType {
    HOME = 'HOME',
    EXTERNAL = 'EXTERNAL'
}

interface BrowserDocumentTab {
    id: number;
    title: string;
    url: string;
    type: BrowserDocumentTabType
}

const DefaultTab: BrowserDocumentTab = {
    id: 0,
    title: 'Home',
    url: '',
    type: BrowserDocumentTabType.HOME
};

function Browser(): JSX.Element {

    return (
        <BrowserContextProvider>
            <View style={BrowserStyles.browserContainer}>
                <BrowserScreenPresenter />
                <BrowserNav />
            </View>
        </BrowserContextProvider>
    );
}

export default Browser;