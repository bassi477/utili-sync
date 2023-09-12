import React from "react";

export interface IBroswerNavTabsContent {
    [key: string]: {
        name: string;
        screen?: React.JSX.Element;
    }
};

export type TBrowserNavTab = IBroswerNavTabsContent[string];

export type TBroswerNavTabsContentKey = 'tabs'
    | 'home'
    | 'downloads'
    | 'history'
    | 'bookmarks';

export interface IBrowserWebTab {
    name: string;
    historyStack: string[];
    url: string | undefined;
};

export type TBrowserWebTabs = { [key: string]: IBrowserWebTab };

export interface IBrowserWebShortcut {
    name: string;
    url: string;
    image?: string | React.JSX.Element;
};

export type TBrowserWebShortcuts = IBrowserWebShortcut[];