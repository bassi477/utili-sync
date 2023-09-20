import React, {useContext} from 'react';
import {Pressable, Text, View} from 'react-native';
import {BrowserContext} from '../../../../../Core/providers/BrowserContextProvider';
import {IAppBrowserHistory} from '../../../../../common/interfaces/AppBrowserHistory';
import uuid from 'react-native-uuid';

interface IBrowserHistoryListItemProps {
  item: IAppBrowserHistory;
  onHistoryOpen: (item: IAppBrowserHistory) => void;
  onHistoryRemove: (id: string) => void;
}

function BrowserHistoryListItem(
  props: IBrowserHistoryListItemProps,
): React.JSX.Element {
  return (
    <View>
      <Text>Id: {props.item.id}</Text>
      <Text>Name: {props.item.name}</Text>
      <Text>Url: {props.item.url}</Text>
      <Text>Icon: {props.item.icon ?? 'Not available'}</Text>
      <Text>Created At: {props.item.createdAt.toDateString()}</Text>
      <Pressable onPress={() => props.onHistoryRemove(props.item.id)}>
        <Text>Remove</Text>
      </Pressable>
      <Pressable onPress={() => props.onHistoryOpen(props.item)}>
        <Text>Open</Text>
      </Pressable>
    </View>
  );
}

function BrowserHistoryScreen(): JSX.Element {
  const {setWebTabs, history, setHistory} = useContext(BrowserContext);

  const onHistoryOpen = (history: IAppBrowserHistory) => {
    const newWebTabUuid = uuid.v4().toString();
    setWebTabs(prevState => {
      const firstWebTabKey = Object.keys(prevState).at(0) as string;
      const firstWebTab = prevState[firstWebTabKey];
      return {
        [newWebTabUuid]: {
          name: history.name,
          nextTab: firstWebTabKey,
          previousTab: undefined,
          historyStack: [],
          url: history.url,
        },
        [firstWebTabKey]: {
          ...firstWebTab,
          previousTab: newWebTabUuid,
        },
        ...prevState,
      };
    });
  };

  const onHistoryRemove = (id: string) => {
    setHistory(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <View>
      <View>
        <Text>History</Text>
      </View>
      <View>
        {history.map(item => {
          return (
            <BrowserHistoryListItem
              key={`app-browser-history-list-item-${item.id}`}
              item={item}
              onHistoryOpen={onHistoryOpen}
              onHistoryRemove={onHistoryRemove}
            />
          );
        })}
      </View>
    </View>
  );
}

export default BrowserHistoryScreen;
