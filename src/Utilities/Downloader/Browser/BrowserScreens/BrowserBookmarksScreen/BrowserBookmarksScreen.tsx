import React, {useContext, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {
  TAppBrowserBookmarkFolder,
  TAppBrowserBookmarkLink,
  TAppBrowserBookmark,
  EAppBrowserBookmarkType,
  TAppBrowserBookmarks,
} from '../../../../../common/interfaces/AppBrowserBookmark';
import {BrowserContext} from '../../../../../Core/providers/BrowserContextProvider';
import uuid from 'react-native-uuid';

interface IAppActionButton {
  title: string;
  backgroundColor: string;
  textColor: string;
  action: () => void;
}

type TAppActionButtons = IAppActionButton[];

function BrowserBookmarksScreen(): JSX.Element {
  const browserContext = useContext(BrowserContext);
  const {
    bookmarks,
    setBookmarks,
    setCurrentNavTabKey,
    setCurrentWebTabKey,
    setWebTabs,
  } = browserContext;
  const [currentRoot, setCurrentRoot] = useState<TAppBrowserBookmark>();

  const addItem = (type: EAppBrowserBookmarkType) => {
    // TODO show modal here.
    const newItem: TAppBrowserBookmark = {
      id: uuid.v4().toString(),
      parentKey: currentRoot?.id ?? undefined,
      children: [],
      type: type,
      name:
        type === EAppBrowserBookmarkType.LINK
          ? 'Demo bookmark link'
          : 'Demo bookmark folder',
      icon: undefined,
      url: type === EAppBrowserBookmarkType.LINK ? 'www.google.com' : undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    let result = [newItem];
    let updatedRoot: TAppBrowserBookmark | undefined = undefined;
    if (currentRoot) {
      const rootIndex = bookmarks.findIndex(item => item.id === currentRoot.id);
      if (rootIndex !== -1) {
        let root = currentRoot as TAppBrowserBookmarkFolder;
        const itemsBefore = bookmarks.slice(undefined, rootIndex);
        const itemsAfter = bookmarks.slice(rootIndex + 1, undefined);
        updatedRoot = {
          ...root,
          children: [...root.children, newItem.id],
          updatedAt: new Date(),
        };
        result = [...itemsBefore, updatedRoot, ...itemsAfter, ...result];
      }
    }
    if (result.length === 1) result = [...bookmarks, ...result];

    setBookmarks(result);
  };

  const removeItem = (id: string) => {
    // TODO show modal here
    let removeQueue: string[] = [];
    const bookmarkIndex = bookmarks.findIndex(item => item.id === id);
    if (bookmarkIndex !== -1) {
      let bookmark = bookmarks[bookmarkIndex];
      removeQueue.push(bookmark.id);
      if (bookmark.type === EAppBrowserBookmarkType.FOLDER) {
        bookmark = bookmark as TAppBrowserBookmarkFolder;
        if (bookmark.children.length > 0) {
          removeQueue = [...removeQueue, ...bookmark.children];
        }
      }
      setBookmarks(prevState =>
        prevState.filter(item => !removeQueue.includes(item.id)),
      );
    }
  };

  const editBookmark = (id: string) => {
    // TODO show modal here
    const bookmarkIndex = bookmarks.findIndex(item => item.id === id);
    if (bookmarkIndex !== -1) {
      let bookmark = bookmarks[bookmarkIndex];
      if (bookmark.type === EAppBrowserBookmarkType.LINK) {
        bookmark = bookmark as TAppBrowserBookmarkLink;
        bookmark.name += ' UPDATED';
        bookmark.url += ' UPDATED';
      } else {
        bookmark = bookmark as TAppBrowserBookmarkFolder;
        bookmark.name += ' UPDATED';
      }
      bookmark.updatedAt = new Date();

      setBookmarks(prevState => {
        const itemsBefore = prevState.slice(undefined, bookmarkIndex);
        const itemsAfter = prevState.slice(bookmarkIndex + 1, undefined);
        return [...itemsBefore, bookmark, ...itemsAfter];
      });
    }
  };

  const openBookmark = (id: string) => {
    const bookmarkIndex = bookmarks.findIndex(item => item.id === id);
    if (bookmarkIndex !== -1) {
      let bookmark = bookmarks[bookmarkIndex];
      if (bookmark.type === EAppBrowserBookmarkType.LINK) {
        let link = bookmark as TAppBrowserBookmarkLink;
        const newWebTabUuid = uuid.v4().toString();
        setWebTabs(prevState => {
          const firstWebTabKey = Object.keys(prevState).at(0) as string;
          const firstWebTab = prevState[firstWebTabKey];
          return {
            [newWebTabUuid]: {
              name: link.name,
              nextTab: firstWebTabKey,
              previousTab: undefined,
              historyStack: [],
              url: link.url,
            },
            [firstWebTabKey]: {
              ...firstWebTab,
              previousTab: newWebTabUuid,
            },
            ...prevState,
          };
        });
        setCurrentWebTabKey(newWebTabUuid);
        setCurrentNavTabKey('home');
      } else {
        let folder = bookmark as TAppBrowserBookmarkFolder;
        setCurrentRoot(folder);
      }
    }
  };

  const goBack = () => {
    if (currentRoot) {
      const parentIndex = bookmarks.findIndex(
        item => item.id === currentRoot.parentKey,
      );
      if (parentIndex !== -1) {
        const parent = bookmarks[parentIndex];
        setCurrentRoot(parent);
      }
    }
  };

  const renderActionButton = (btn: IAppActionButton) => (
    <Pressable
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: btn.backgroundColor,
        borderRightColor: 'darkGray',
        borderLeftColor: 'darkGray',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 2,
        padding: 5,
      }}
      onPress={btn.action}>
      <Text style={{color: btn.textColor}}>{btn.title}</Text>
    </Pressable>
  );

  const renderActionButtonGroup = (buttons: TAppActionButtons) => (
    <View
      style={{
        flex: 0,
        flexDirection: 'row',
        marginTop: 'auto',
        borderRightColor: 'black',
        borderLeftColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        padding: 2,
        justifyContent: 'space-evenly',
      }}>
      {buttons.map(renderActionButton)}
    </View>
  );

  const renderKeyValuePair = (key: string, value: string) => (
    <View
      style={{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
      }}>
      <Text style={{fontSize: 16, fontWeight: '900'}}>{key}</Text>
      <Text>{'=>'}</Text>
      <Text style={{fontSize: 14, fontWeight: '600'}}>{value}</Text>
    </View>
  );

  const createActionButtonProps = (id: string) => [
    {
      title: 'Open',
      action: () => openBookmark(id),
      backgroundColor: 'green',
      textColor: 'white',
    },
    {
      title: 'Edit',
      action: () => editBookmark(id),
      backgroundColor: 'gray',
      textColor: 'black',
    },
    {
      title: 'Remove',
      action: () => removeItem(id),
      backgroundColor: 'red',
      textColor: 'white',
    },
  ];

  const renderLink = (bookmark: TAppBrowserBookmarkLink) => (
    <View
      style={{
        flex: 0,
        flexDirection: 'column',
        margin: 15,
        padding: 15,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 12,
      }}>
      {renderKeyValuePair('Id', bookmark.id)}
      {renderKeyValuePair('Parent', bookmark.parentKey ?? 'Root')}
      {renderKeyValuePair('Type', bookmark.type)}
      {renderKeyValuePair('Name', bookmark.name)}
      {renderKeyValuePair('Icon', bookmark.icon ?? 'Missing')}
      {renderKeyValuePair('Url', bookmark.url)}
      {renderKeyValuePair('Created At', bookmark.createdAt.toDateString())}
      {renderKeyValuePair('Updated At', bookmark.createdAt.toDateString())}
      {renderActionButtonGroup(createActionButtonProps(bookmark.id))}
    </View>
  );

  const renderFolder = (folder: TAppBrowserBookmarkFolder) => (
    <View
      style={{
        flex: 0,
        flexDirection: 'column',
        margin: 15,
        padding: 15,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 12,
      }}>
      {renderKeyValuePair('Id', folder.id)}
      {renderKeyValuePair('Parent', folder.parentKey ?? 'Root')}
      {renderKeyValuePair('Type', folder.type)}
      {renderKeyValuePair('Name', folder.name)}
      {renderKeyValuePair('Icon', folder.icon ?? 'Missing')}
      {renderKeyValuePair('Children', folder.children.join(', ') ?? 'Missing')}
      {renderKeyValuePair('Created At', folder.createdAt.toDateString())}
      {renderKeyValuePair('Updated At', folder.createdAt.toDateString())}
      {renderActionButtonGroup(createActionButtonProps(folder.id))}
    </View>
  );

  const filterBookmarks = (items: TAppBrowserBookmarks) => {
    let parentKey: string | undefined = undefined;
    if (currentRoot) {
      parentKey = currentRoot.id;
    }
    return items.filter(item => item.parentKey === parentKey);
  };

  return (
    <View style={{flex: 1, margin: 15}}>
      <Pressable>
        <Text onPress={() => addItem(EAppBrowserBookmarkType.LINK)}>
          Add bookmark
        </Text>
      </Pressable>
      <Pressable>
        <Text onPress={() => addItem(EAppBrowserBookmarkType.FOLDER)}>
          Add bookmark folder
        </Text>
      </Pressable>
      <View>
        <View
          style={{
            flex: 0,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {renderActionButton({
            title: 'Back',
            textColor: 'blue',
            backgroundColor: 'transparent',
            action: goBack,
          })}
        </View>
      </View>
      <Text style={{fontSize: 24, fontWeight: '900'}}>
        {currentRoot?.name ?? 'Root'}
      </Text>
      <ScrollView style={{flex: 1}}>
        {filterBookmarks(bookmarks).map(bookmark => {
          return (
            <View
              style={{flex: 0, width: '100%', flexDirection: 'column'}}
              key={`bookmark-${bookmark.id}`}>
              {bookmark.type === EAppBrowserBookmarkType.LINK
                ? renderLink(bookmark as TAppBrowserBookmarkLink)
                : renderFolder(bookmark as TAppBrowserBookmarkFolder)}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default BrowserBookmarksScreen;
