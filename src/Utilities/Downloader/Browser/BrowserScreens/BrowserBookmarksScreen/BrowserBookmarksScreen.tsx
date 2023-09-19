import React, {useContext, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {create} from 'apisauce';
import AppFileDownloadHelper from '../../../../../common/helper/AppFileDownloadHelper';
import RNFetchBlob from 'rn-fetch-blob';
import {BrowserContext} from '../../../../../Core/providers/BrowserContextProvider';
import {
  TAppBrowserBookmarkFolder,
  TAppBrowserBookmarkLink,
  TAppBrowserBookmark,
  TAppBrowserBookmarks,
  EAppBrowserBookmarkType,
} from '../../../../../common/interfaces/AppBrowserBookmark';
import uuid from 'react-native-uuid';

const apiSauceInstance = create({
  baseURL: undefined,
});

function BrowserBookmarksScreen(): JSX.Element {
  const browserContext = useContext(BrowserContext);
  const bookmarks = browserContext.bookmarks;
  const [currentRoot, setCurrentRoot] = useState<TAppBrowserBookmark>();

  // const updateBookmarksTree = (
  //   parentKeys: string[],
  //   target: IAppBrowserBookmarkFolder,
  //   item: TAppBrowserBookmark,
  //   itemKey: string,
  // ): IAppBrowserBookmarkFolder => {
  //   const totalKeys = parentKeys.length;
  //   const key = parentKeys.shift() as string;
  //   if (totalKeys === 1) {
  //     return {...target, children: {...target.children, [itemKey]: item}};
  //   } else
  //     return {
  //       ...target,
  //       children: {
  //         ...target.children,
  //         [key]: updateBookmarksTree(
  //           parentKeys,
  //           target.children[key] as IAppBrowserBookmarkFolder,
  //           item,
  //           itemKey,
  //         ),
  //       },
  //     };
  // };

  // const updateBookmarks = (keys: string[], item: TAppBrowserBookmark, itemKey: string) => {
  //   let updatedBookmarks = bookmarks;
  //   const totalKeys = keys.length;
  //   const minKeyIndex = 0;
  //   const maxKeyIndex = totalKeys - 1;
  //   // if no parent, add to root.
  //   if(totalKeys === 0) updatedBookmarks[itemKey] = item;
  //   // if one parent, add to
  //   // else if(totalKeys === 1) updatedBookmarks[keys[minKeyIndex]];
  //   else if(totalKeys > 0) {
  //     let loopIterator = minKeyIndex;
  //     let result: TAppBrowserBookmark | undefined = undefined;
  //     let objectKeyMapping: {key: string, object: IAppBrowserBookmarkFolder}[] = [];
  //     let currentObject = undefined;

  //     // let currentItemPointer: IAppBrowserBookmarkFolder | undefined = undefined;
  //     for (let loopIterator = minKeyIndex; loopIterator <= maxKeyIndex; loopIterator++) {
  //       const key = keys[loopIterator];
  //       if(!currentObject)  currentObject = updatedBookmarks[key] as IAppBrowserBookmarkFolder;
  //       else currentObject = currentObject.children[key] as IAppBrowserBookmarkFolder;
  //       objectKeyMapping.push({
  //         key,
  //         object: currentObject
  //       });

  //       // if(!result) result = currentObject;

  //       // let j = loopIterator;
  //       // while(j >= 0) {

  //       // }
  //       // // result = {
  //       //   ...result,
  //       //   children:
  //       // };
  //       // else currentObject = currentObject.children[key] as IAppBrowserBookmarkFolder;

  //       // const key = keys[i];
  //       // if(i === minKeyIndex && !result) result = updatedBookmarks[key];
  //       // let mergedObject = {};
  //       // let j =
  //       // while
  //       // if(!currentItemPointer) currentItemPointer = updatedBookmarks[key] as IAppBrowserBookmarkFolder;
  //       // else currentItemPointer = currentItemPointer.children[]
  //       // else if(currentItemPointer && i === maxKeyIndex) currentItemPointer.children[key][itemKey]
  //     }

  //   }

  //   return updatedBookmarks;

  //   if(firstKeyIndex === lastKeyIndex) {

  //   }
  //   let objectKeyMapping = [];
  //   let parentKeyMap: {
  //     key: string,
  //     object: TAppBrowserBookmark
  //   } | undefined = undefined;
  //   // let parentObject: TAppBrowserBookmark | undefined = undefined;
  //   keys.map((key, index) => {
  //     const isFirstKey = index === 0;
  //     const isLastKey = index === maxKeyIndex;
  //     // set the parent object so that we can merge the mappings to this object.
  //     if(!parentKeyMap && isFirstKey) parentKeyMap = { key, object: bookmarks[key] };
  //     // if last key.
  //     if(index === maxKeyIndex) {
  //       //
  //     }

  //     // if(index === keys.length - 1)
  //     // while not the last index.
  //     while(index != totalKeys - 1) {

  //       objectKeyMapping.push({
  //         key: key,
  //         object: bookmarks[keys[]]
  //       });
  //     }
  //   });
  // };

  // const updateBookmarksOld = (
  //   keys: string[],
  //   parent: IAppBrowserBookmarkFolder | undefined,
  //   newValue: TAppBrowserBookmark,
  //   newKey: string,
  // ) => {
  //   let array = keys;
  //   let parentInstance = parent;
  //   if (array.length !== 0) {
  //     let key = array.pop() as string;
  //     if (!parentInstance)
  //       parentInstance = bookmarks[key] as IAppBrowserBookmarkFolder;
  //     const child = parentInstance.children[key] as IAppBrowserBookmarkFolder;
  //     const result = updateBookmarks(array, child, newValue, newKey);
  //     return {
  //       ...bookmarks,
  //       [key]: result,
  //       // ...parentInstance,
  //       // children: {
  //       //   ...parentInstance.children,
  //       //   [key]: updateBookmarks(array, child, newValue, newKey),
  //       // },
  //     } as TBrowserBookmarks;
  //   }

  //   if (array.length === 0 && parentInstance) {
  //     return {
  //       ...parentInstance,
  //       children: {
  //         ...parentInstance.children,
  //         [newKey]: newValue,
  //       },
  //     } as IAppBrowserBookmarkFolder;
  //   }

  //   if (array.length === 0 && !parentInstance) {
  //     return {
  //       ...bookmarks,
  //       [newKey]: newValue,
  //     };
  //   }
  // };

  // const addBookmark = () => {
  //   // TODO show modal here.
  //   let result = bookmarks;
  //   let parentKeys: string[] = [];
  //   if (currentRoot)
  //     parentKeys = [...currentRoot.value.parentKeys, currentRoot.key];

  //   const newBookmarkKey = uuid.v4().toString();
  //   const newBookmark: IAppBrowserBookmarkLink = {
  //     icon: undefined,
  //     name: 'Demo bookmark',
  //     parentKeys,
  //     url: 'www.google.com',
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   };

  //   if(parentKeys.length ===0) result = {...result, [newBookmarkKey]: newBookmark};
  //   if (parentKeys.length > 0) {
  //     const rootParentKey = parentKeys.shift() as string;
  //     const rootParent = bookmarks[rootParentKey] as IAppBrowserBookmarkFolder;
  //     result = {
  //       ...result,
  //       [rootParentKey]: updateBookmarksTree(
  //         parentKeys,
  //         rootParent,
  //         newBookmark,
  //         newBookmarkKey,
  //       ),
  //     };
  //   }
  //   browserContext.setBookmarks(prevState => ({
  //     ...prevState,
  //     ...result
  //   }));
  // };
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

    browserContext.setBookmarks(prevState => [...prevState, newItem]);
  };
  const addBookmarkFolder = () => {};
  const removeBookmark = () => {};
  const removeBookmarkFolder = () => {};
  const editBookmark = () => {};
  const editBookmarkFolder = () => {};
  const openBookmarkFolder = () => {};

  const renderLink = (bookmark: TAppBrowserBookmarkLink) => (
    <View
      style={{
        flex: 0,
        flexDirection: 'column',
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 25,
      }}>
      <Text>Id: {bookmark.id}</Text>
      <Text>Parent: {bookmark.parentKey}</Text>
      <Text>Type: {bookmark.type}</Text>
      <Text>Name: {bookmark.name}</Text>
      <Text>Icon: {bookmark.icon}</Text>
      <Text>Url: {bookmark.url}</Text>
      <Text>CreatedAt: {bookmark.createdAt.toDateString()}</Text>
      <Text>UpdatedAt: {bookmark.updatedAt.toDateString()}</Text>
      <Pressable onPress={removeBookmark}>
        <Text>Remove bookmark</Text>
      </Pressable>
      <Pressable onPress={editBookmark}>
        <Text>Edit bookmark</Text>
      </Pressable>
    </View>
  );

  const renderFolder = (folder: TAppBrowserBookmarkFolder) => (
    <View
      style={{
        flex: 0,
        flexDirection: 'column',
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 25,
      }}>
      <Text>Id: {folder.id}</Text>
      <Text>Parent: {folder.parentKey}</Text>
      <Text>Type: {folder.type}</Text>
      <Text>Name: {folder.name}</Text>
      <Text>Icon: {folder.icon}</Text>
      <Text>Children: {folder.children.join(', ')}</Text>
      <Text>CreatedAt: {folder.createdAt.toDateString()}</Text>
      <Text>UpdatedAt: {folder.updatedAt.toDateString()}</Text>
      <Pressable onPress={editBookmarkFolder}>
        <Text>Edit folder</Text>
      </Pressable>
      <Pressable onPress={removeBookmarkFolder}>
        <Text>Remove folder</Text>
      </Pressable>
      <Pressable onPress={openBookmarkFolder}>
        <Text>Open bookmark</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={{flex: 1}}>
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
      <ScrollView style={{flex: 1}}>
        {bookmarks.map(bookmark => {
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
