import { PropsWithChildren, createContext, useState } from "react";
import { IBrowserWebTab, TBroswerNavTabsContentKey, TBrowserWebTabs } from "../interfaces/Utility/Browser";
import uuid from 'react-native-uuid';

interface IBrowserContext {
    currentNavTabKey: TBroswerNavTabsContentKey;
    setCurrentNavTabKey: React.Dispatch<React.SetStateAction<TBroswerNavTabsContentKey>>;
    webTabs: TBrowserWebTabs;
    setWebTabs: React.Dispatch<React.SetStateAction<TBrowserWebTabs>>;
    currentWebTab: IBrowserWebTab;
    setCurrentWebTab: React.Dispatch<React.SetStateAction<IBrowserWebTab>>;
    isWebTabsDrawerOpen: boolean;
    setWebTabsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type TBrowserContextProviderProps = PropsWithChildren<{}>;

const initialTabUuid = uuid.v4().toString();
const initialTab: IBrowserWebTab = {
    historyStack: [],
    name: 'Home',
    url: undefined
};

export const BrowserContext = createContext<IBrowserContext>({
    currentNavTabKey: "home",
    setCurrentNavTabKey: () => { },
    currentWebTab: initialTab,
    setCurrentWebTab: () => { },
    webTabs: { [initialTabUuid]: initialTab },
    setWebTabs: () => { },
    isWebTabsDrawerOpen: false,
    setWebTabsDrawerOpen: () => { }
});

function BrowserContextProvider(props: TBrowserContextProviderProps): React.JSX.Element {
    const [currentNavTabKey, setCurrentNavTabKey] = useState<TBroswerNavTabsContentKey>('home');
    const [webTabs, setWebTabs] = useState<TBrowserWebTabs>({ [initialTabUuid]: initialTab });
    const [currentWebTab, setCurrentWebTab] = useState<IBrowserWebTab>(initialTab);

    const [isWebTabsDrawerOpen, setWebTabsDrawerOpen] = useState<boolean>(false);

    return (
        <BrowserContext.Provider value={{
            currentNavTabKey,
            setCurrentNavTabKey,
            currentWebTab,
            setCurrentWebTab,
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
