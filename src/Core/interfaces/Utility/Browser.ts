import React from "react";

export interface IBrowserNavTabsContent {
    [key: string]: {
        name: string;
        screen?: React.JSX.Element;
    }
};

export type TBrowserNavTab = IBrowserNavTabsContent[string];

export type TBrowserNavTabsContentKey = 'tabs'
    | 'home'
    | 'downloads'
    | 'history'
    | 'bookmarks';

export interface IBrowserWebTab {
    name: string;
    historyStack: (string | undefined)[];
    url: string | undefined;
    nextTab: string | undefined;
    previousTab: string | undefined;
};

export type TBrowserWebTabs = { [key: string]: IBrowserWebTab };

export interface IBrowserWebShortcut {
    name: string;
    url: string;
    image?: string | React.JSX.Element;
};

export type TBrowserWebShortcuts = IBrowserWebShortcut[];