import { PropsWithChildren, createContext, useState } from "react";
import { IBrowserWebTab, TBrowserNavTabsContentKey, TBrowserWebTabs } from "../interfaces/Utility/Browser";
import uuid from 'react-native-uuid';

interface IBrowserContext {
    currentNavTabKey: TBrowserNavTabsContentKey;
    setCurrentNavTabKey: React.Dispatch<React.SetStateAction<TBrowserNavTabsContentKey>>;
    webTabs: TBrowserWebTabs;
    setWebTabs: React.Dispatch<React.SetStateAction<TBrowserWebTabs>>;
    currentWebTabKey: string | undefined;
    setCurrentWebTabKey: React.Dispatch<React.SetStateAction<string | undefined>>;
    isWebTabsDrawerOpen: boolean;
    setWebTabsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type TBrowserContextProviderProps = PropsWithChildren<{}>;

const initialTabUuid = uuid.v4().toString();
const initialTab: IBrowserWebTab = {
    historyStack: [],
    name: 'Home',
    url: undefined,
    nextTab: undefined,
    previousTab: undefined
};

export const BrowserContext = createContext<IBrowserContext>({
    currentNavTabKey: "home",
    setCurrentNavTabKey: () => { },
    currentWebTabKey: initialTabUuid,
    setCurrentWebTabKey: () => { },
    webTabs: { [initialTabUuid]: initialTab },
    setWebTabs: () => { },
    isWebTabsDrawerOpen: false,
    setWebTabsDrawerOpen: () => { }
});

function BrowserContextProvider(props: TBrowserContextProviderProps): React.JSX.Element {
    const [currentNavTabKey, setCurrentNavTabKey] = useState<TBrowserNavTabsContentKey>('home');
    const [webTabs, setWebTabs] = useState<TBrowserWebTabs>({ [initialTabUuid]: initialTab });
    const [currentWebTabKey, setCurrentWebTabKey] = useState<string | undefined>(initialTabUuid);

    const [isWebTabsDrawerOpen, setWebTabsDrawerOpen] = useState<boolean>(false);

    return (
        <BrowserContext.Provider value={{
            currentNavTabKey,
            setCurrentNavTabKey,
            currentWebTabKey,
            setCurrentWebTabKey,
            webTabs,
            setWebTabs,
            isWebTabsDrawerOpen,
            setWebTabsDrawerOpen
        }}>
            {props.children}
        </BrowserContext.Provider>
    );
};

export default BrowserContextProvider;
