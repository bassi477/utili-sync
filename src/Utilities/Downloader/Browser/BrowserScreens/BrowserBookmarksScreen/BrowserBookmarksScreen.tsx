import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  TAppBrowserBookmarkFolder,
  TAppBrowserBookmarkLink,
  TAppBrowserBookmark,
  EAppBrowserBookmarkType,
  TAppBrowserBookmarks,
} from '../../../../../common/interfaces/AppBrowserBookmark';
import {BrowserContext} from '../../../../../Core/providers/BrowserContextProvider';
import uuid from 'react-native-uuid';
import {Formik, FormikErrors, FormikHelpers} from 'formik';
import AppTheme from '../../../../../common/theme/AppTheme';
import * as Yup from 'yup';
import AppIconButton from '../../../../../common/components/AppButton/AppIconButton';
import AppIconCatalog from '../../../../../common/icons/AppIconCatalog';

/* TODO temporarily here, move to common*/
type TAppModalCoreProps = PropsWithChildren<{
  visible: boolean;
  onClose: () => void;
  transparent: boolean;
}>;

function AppModalCore(props: TAppModalCoreProps): React.JSX.Element {
  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onClose}
      transparent={props.transparent}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'stretch',
          backgroundColor: 'green',
        }}>
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: '15%',
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
}

enum EBookmarkFormModalCase {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

interface IBookmarkFormModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (event: IAppBookmarkFormSubmitEvent) => void;
  case: EBookmarkFormModalCase;
  type: EAppBrowserBookmarkType;
  data: TAppBrowserBookmark | undefined;
}

function BookmarkFormModal(props: IBookmarkFormModalProps): React.JSX.Element {
  const isBookmarkLink = props.type === EAppBrowserBookmarkType.LINK;
  const isBookmarkNew = props.case === EBookmarkFormModalCase.CREATE;
  const linkNameInputRef = useRef<TextInput | null>();
  const linkUrlInputRef = useRef<TextInput | null>();
  const folderNameInputRef = useRef<TextInput | null>();

  const renderFormTitle = () => {
    const action = isBookmarkNew ? 'Add' : 'Edit';
    const itemName = isBookmarkLink ? 'bookmark' : 'folder';
    return (
      <Text style={{fontSize: 18, fontWeight: '900'}}>
        {`${action} ${itemName}`}
      </Text>
    );
  };

  const renderLinkFormInputControls = (
    params: IAppBookmarkLinkFormParameters,
  ) => {
    return (
      <View
        style={{
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}>
        <View
          style={{
            marginVertical: 8,
            padding: 8,
            borderColor: AppTheme.component.border.color,
            borderWidth: AppTheme.component.border.width,
            borderRadius: AppTheme.component.borderRadius.lg,
          }}>
          <Text>Name</Text>
          <TextInput
            style={{
              borderBottomColor: AppTheme.component.border.color,
              borderBottomWidth: AppTheme.component.border.width,
              fontSize: 16,
            }}
            value={params.state.name}
            blurOnSubmit={true}
            editable={true}
            focusable={true}
            onBlur={params.handleBlur('name')}
            onChangeText={params.handleChange('name')}
            keyboardAppearance={'default'}
            keyboardType={'default'}
            returnKeyType="next"
            onSubmitEditing={() => linkUrlInputRef.current?.focus()}
            ref={r => (linkNameInputRef.current = r)}
          />
        </View>
        <View
          style={{
            marginVertical: 8,
            padding: 8,
            borderColor: AppTheme.component.border.color,
            borderWidth: AppTheme.component.border.width,
            borderRadius: AppTheme.component.borderRadius.lg,
          }}>
          <Text>Url</Text>
          <TextInput
            style={{
              borderBottomColor: AppTheme.component.border.color,
              borderBottomWidth: AppTheme.component.border.width,
              fontSize: 16,
            }}
            value={params.state.url}
            blurOnSubmit={true}
            editable={true}
            focusable={true}
            onBlur={params.handleBlur('url')}
            onChangeText={params.handleChange('url')}
            keyboardAppearance={'default'}
            keyboardType={'url'}
            returnKeyType="go"
            onSubmitEditing={() => params.handleSubmit()}
            ref={r => (linkUrlInputRef.current = r)}
          />
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <View style={{marginStart: 8, marginVertical: 4}}>
            <Pressable
              onPress={() => params.handleCancel()}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: AppTheme.colors.base.secondary,
                borderRadius: AppTheme.component.borderRadius.normal,
                borderColor: AppTheme.component.border.color,
                borderWidth: AppTheme.component.border.width,
              }}>
              <Text style={{color: AppTheme.colors.base.dark}}>Cancel</Text>
            </Pressable>
          </View>
          <View style={{marginStart: 8, marginVertical: 4}}>
            <Pressable
              disabled={
                Object.keys(
                  params.errors as FormikErrors<IBookmarkLinkFormState>,
                ).length > 0
              }
              onPress={() => params.handleSubmit()}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: AppTheme.colors.base.primary,
                borderRadius: AppTheme.component.borderRadius.normal,
                borderColor: AppTheme.component.border.color,
                borderWidth: AppTheme.component.border.width,
              }}>
              <Text style={{color: AppTheme.colors.base.light}}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  const renderFolderFormInputControls = (
    params: IAppBookmarkFolderFormParameters,
  ) => {
    return (
      <View
        style={{
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}>
        <View
          style={{
            marginVertical: 8,
            padding: 8,
            borderColor: AppTheme.component.border.color,
            borderWidth: AppTheme.component.border.width,
            borderRadius: AppTheme.component.borderRadius.lg,
          }}>
          <Text>Name</Text>
          <TextInput
            style={{
              borderBottomColor: AppTheme.component.border.color,
              borderBottomWidth: AppTheme.component.border.width,
              fontSize: 16,
            }}
            value={params.state.name}
            blurOnSubmit={true}
            editable={true}
            focusable={true}
            onBlur={params.handleBlur('name')}
            onChangeText={params.handleChange('name')}
            keyboardAppearance={'default'}
            keyboardType={'default'}
            returnKeyType="go"
            onSubmitEditing={() => params.handleSubmit()}
            ref={r => (folderNameInputRef.current = r)}
          />
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <View style={{marginStart: 8, marginVertical: 4}}>
            <Pressable
              onPress={() => params.handleCancel()}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: AppTheme.colors.base.secondary,
                borderRadius: AppTheme.component.borderRadius.normal,
                borderColor: AppTheme.component.border.color,
                borderWidth: AppTheme.component.border.width,
              }}>
              <Text style={{color: AppTheme.colors.base.dark}}>Cancel</Text>
            </Pressable>
          </View>
          <View style={{marginStart: 8, marginVertical: 4}}>
            <Pressable
              disabled={params.errors && params.errors.name !== undefined}
              onPress={() => params.handleSubmit()}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: AppTheme.colors.base.primary,
                borderRadius: AppTheme.component.borderRadius.normal,
                borderColor: AppTheme.component.border.color,
                borderWidth: AppTheme.component.border.width,
              }}>
              <Text style={{color: AppTheme.colors.base.light}}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  const renderFormInputControls = (params: IAppBookmarkFormParameters) => {
    return (
      <React.Fragment>
        {params.type === EAppBrowserBookmarkType.LINK
          ? renderLinkFormInputControls({
              ...params,
              state: params.state as IBookmarkLinkFormState,
            })
          : renderFolderFormInputControls({
              ...params,
              state: params.state as IBookmarkFolderFormState,
            })}
      </React.Fragment>
    );
  };

  const linkInitialData = (item?: TAppBrowserBookmarkLink) => {
    return {
      name: item?.name ?? '',
      url: item?.url ?? '',
    } as IBookmarkLinkFormState;
  };

  const folderInitialData = (item?: TAppBrowserBookmarkFolder) => {
    return {
      name: item?.name ?? '',
    } as IBookmarkFolderFormState;
  };

  const createInitialData = (): TBrowserBookmarkFormState => {
    let item = props.data;

    if (isBookmarkLink && isBookmarkNew) return linkInitialData(undefined);
    else if (isBookmarkLink && !isBookmarkNew)
      return linkInitialData(item as TAppBrowserBookmarkLink);
    else if (!isBookmarkLink && !isBookmarkNew)
      return folderInitialData(item as TAppBrowserBookmarkFolder);
    else return folderInitialData(undefined);
  };

  const onFormSubmit = (
    values: TBrowserBookmarkFormState,
    formikHelpers: FormikHelpers<TBrowserBookmarkFormState>,
  ) => {
    console.log('BookmarkFormModal - SUBMITTED');
    let result: TBrowserBookmarkFormState | undefined = {
      name: values.name,
    };
    if (props.type === EAppBrowserBookmarkType.LINK) {
      const state = values as IBookmarkLinkFormState;
      result = state;
    }

    props.onSubmit({
      id: props.data?.id ?? undefined,
      item: result,
      type: props.type,
    });
  };

  useEffect(() => {
    console.log('BookmarkFormModal - OPENED');
    console.log('BookmarkFormModal - Props', props);
  }, []);

  const linkValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    url: Yup.string().url().required(),
  });

  const folderValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const createValidationSchema = () => {
    return props.type === EAppBrowserBookmarkType.LINK
      ? linkValidationSchema
      : folderValidationSchema;
  };

  return (
    <AppModalCore
      visible={props.visible}
      onClose={props.onClose}
      transparent={true}>
      <View style={{flex: 0, flexDirection: 'column'}}>
        {renderFormTitle()}
        <Formik
          validateOnBlur={true}
          isInitialValid={false}
          validationSchema={createValidationSchema()}
          initialValues={createInitialData()}
          onSubmit={onFormSubmit}>
          {({errors, values, handleBlur, handleChange, handleSubmit}) => {
            values = isBookmarkLink
              ? (values as IBookmarkLinkFormState)
              : values;
            return (
              <React.Fragment>
                {renderFormInputControls({
                  errors,
                  state: values,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  type: props.type,
                  handleCancel: props.onClose,
                })}
              </React.Fragment>
            );
          }}
        </Formik>
      </View>
    </AppModalCore>
  );
}

// TODO extract form core and move to common.
interface IAppBookmarkFolderFormParameters {
  state: IBookmarkFolderFormState;
  errors: FormikErrors<TBrowserBookmarkFormState>;
  handleBlur: TAppFormikBlurEvent;
  handleChange: TAppFormikChangeEvent;
  handleSubmit: TAppFormikSubmitEvent;
  handleCancel: () => void;
}

interface IAppBookmarkLinkFormParameters {
  state: IBookmarkLinkFormState;
  errors: FormikErrors<TBrowserBookmarkFormState>;
  handleBlur: TAppFormikBlurEvent;
  handleChange: TAppFormikChangeEvent;
  handleSubmit: TAppFormikSubmitEvent;
  handleCancel: () => void;
}

interface IAppBookmarkFormParameters {
  state: TBrowserBookmarkFormState;
  errors: FormikErrors<TBrowserBookmarkFormState>;
  handleBlur: TAppFormikBlurEvent;
  handleChange: TAppFormikChangeEvent;
  handleSubmit: TAppFormikSubmitEvent;
  type: EAppBrowserBookmarkType;
  handleCancel: () => void;
}

interface IAppBookmarkFormSubmitEvent {
  id?: string;
  item: TBrowserBookmarkFormState;
  type: EAppBrowserBookmarkType;
}

type TAppFormikChangeEvent = {
  (e: React.ChangeEvent<any>): void;
  <T = string | React.ChangeEvent<any>>(
    field: T,
  ): T extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void;
};

type TAppFormikSubmitEvent = (
  e?: React.FormEvent<HTMLFormElement> | undefined,
) => void;

type TAppFormikBlurEvent = {
  (e: React.FocusEvent<any, Element>): void;
  <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
};

interface IBookmarkLinkFormState {
  name: string;
  url: string;
}

interface IBookmarkFolderFormState {
  name: string;
}

type TBrowserBookmarkFormState =
  | IBookmarkLinkFormState
  | IBookmarkFolderFormState;

interface IBookmarkScreenFormState {
  visible: boolean;
  case: EBookmarkFormModalCase | undefined;
  type: EAppBrowserBookmarkType | undefined;
  data: TAppBrowserBookmark | undefined;
}
/* section end */

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
  const [bookmarkFormState, setBookmarkFormState] =
    useState<IBookmarkScreenFormState>({
      visible: false,
      case: undefined,
      data: undefined,
      type: undefined,
    });

  const addItem = (e: IAppBookmarkFormSubmitEvent) => {
    const isTypeLink = e.type === EAppBrowserBookmarkType.LINK;

    const newItem: TAppBrowserBookmark = {
      id: uuid.v4().toString(),
      parentKey: currentRoot?.id ?? undefined,
      children: [],
      type: e.type,
      name: e.item.name,
      icon: undefined,
      url: isTypeLink ? (e.item as IBookmarkLinkFormState).url : undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    let result = bookmarks;
    if (currentRoot) {
      const rootIndex = bookmarks.findIndex(item => item.id === currentRoot.id);
      if (rootIndex !== -1) {
        let root = currentRoot as TAppBrowserBookmarkFolder;
        root['children'] = [...root['children'], newItem.id];
        root['updatedAt'] = new Date();
        result[rootIndex] = root;
      }
    }

    setBookmarks([...result, newItem]);
  };

  const removeItem = (id: string) => {
    // TODO show modal here
    let removeQueue: string[] = [];
    let result = bookmarks;
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
      if (bookmark.parentKey) {
        const parentIndex = bookmarks.findIndex(
          item => item.id === bookmark.parentKey,
        );
        if (parentIndex !== -1) {
          let parent = bookmarks[parentIndex] as TAppBrowserBookmarkFolder;
          parent['children'] = parent['children'].filter(
            item => item === bookmark.id,
          );
          result[parentIndex] = parent;
        }
      }
      result = result.filter(item => !removeQueue.includes(item.id));
      setBookmarks(result);
    }
  };

  const editItem = (e: IAppBookmarkFormSubmitEvent) => {
    if (!e.id) return;
    const bookmarkIndex = bookmarks.findIndex(item => item.id === e.id);
    if (bookmarkIndex !== -1) {
      let bookmark = bookmarks[bookmarkIndex];
      if (bookmark.type === EAppBrowserBookmarkType.LINK) {
        bookmark = bookmark as TAppBrowserBookmarkLink;
        let state = e.item as IBookmarkLinkFormState;
        bookmark.name = state.name;
        bookmark.url = state.url;
      } else {
        bookmark = bookmark as TAppBrowserBookmarkFolder;
        let state = e.item as IBookmarkFolderFormState;
        bookmark.name = state.name;
      }
      bookmark.updatedAt = new Date();

      setBookmarks(prevState => {
        let result = prevState;
        result[bookmarkIndex] = bookmark;
        return result;
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
      setCurrentRoot(parentIndex !== -1 ? bookmarks[parentIndex] : undefined);
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

  const createActionButtonProps = (
    item: TAppBrowserBookmark,
    type: EAppBrowserBookmarkType,
  ) => [
    {
      title: 'Open',
      action: () => openBookmark(item.id),
      backgroundColor: 'green',
      textColor: 'white',
    },
    {
      title: 'Edit',
      action: () => openBookmarkFormModal(type, item),
      backgroundColor: 'gray',
      textColor: 'black',
    },
    {
      title: 'Remove',
      action: () => removeItem(item.id),
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
      {renderActionButtonGroup(
        createActionButtonProps(bookmark, EAppBrowserBookmarkType.LINK),
      )}
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
      {renderActionButtonGroup(
        createActionButtonProps(folder, EAppBrowserBookmarkType.FOLDER),
      )}
    </View>
  );

  const filterBookmarks = (items: TAppBrowserBookmarks) => {
    let parentKey: string | undefined = undefined;
    if (currentRoot) {
      parentKey = currentRoot.id;
    }
    return items.filter(item => item.parentKey === parentKey);
  };

  const openBookmarkFormModal = (
    type: EAppBrowserBookmarkType,
    data?: TAppBrowserBookmark,
  ) => {
    const formCase =
      data !== undefined
        ? EBookmarkFormModalCase.UPDATE
        : EBookmarkFormModalCase.CREATE;

    setBookmarkFormState(prevState => ({
      ...prevState,
      visible: true,
      case: formCase,
      data,
      type,
    }));
  };

  const onBookmarkFormSubmit = (e: IAppBookmarkFormSubmitEvent) => {
    e.id === undefined ? addItem(e) : editItem(e);
    onBookmarkFormClose();
  };

  const onBookmarkFormClose = () => {
    setBookmarkFormState({
      visible: false,
      case: undefined,
      data: undefined,
      type: undefined,
    });
  };

  return (
    <View style={{flex: 1, margin: 15}}>
      <AppIconButton
        icon={AppIconCatalog['utilities']['browser']['bookmark']['add']}
        action={() => openBookmarkFormModal(EAppBrowserBookmarkType.LINK)}
        size={16}
        active={true}
      />
      <AppIconButton
        icon={AppIconCatalog['utilities']['browser']['bookmark']['folder']['add']}
        action={() => openBookmarkFormModal(EAppBrowserBookmarkType.LINK)}
        size={16}
        active={true}
      />
      <Pressable>
        <Text
          onPress={() => openBookmarkFormModal(EAppBrowserBookmarkType.FOLDER)}>
          Add bookmark folder
        </Text>
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {currentRoot &&
            renderActionButton({
              title: 'Back',
              textColor: 'blue',
              backgroundColor: 'transparent',
              action: goBack,
            })}
        </View>
        <Text style={{fontSize: 24, fontWeight: '900'}}>
          {currentRoot?.name ?? 'Root'}
        </Text>
      </View>

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
      {bookmarkFormState.visible && (
        <BookmarkFormModal
          visible={bookmarkFormState.visible}
          case={bookmarkFormState.case ?? EBookmarkFormModalCase.CREATE}
          onClose={onBookmarkFormClose}
          data={bookmarkFormState.data}
          onSubmit={onBookmarkFormSubmit}
          type={bookmarkFormState.type ?? EAppBrowserBookmarkType.FOLDER}
        />
      )}
    </View>
  );
}

export default BrowserBookmarksScreen;
