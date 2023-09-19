import {useContext, useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import {BrowserContext} from '../../../../../../../Core/providers/BrowserContextProvider';
import AddressBarInputControlStyles from './AddressBarInputControl.stylesheet';
import AddressBarButton from '../AddressBarButton/AddressBarButton';
import {AppThemeBrowserWebTabIconProps} from '../../../../../../../Core/constants/resources/Icons';
import {BrowserHomeContext} from '../../../../../../../Core/providers/BrowserHomeContextProvider';
import {IBrowserWebTab} from '../../../../../../../Core/interfaces/Utility/Browser';
import uuid from 'react-native-uuid';
import AppIconCatalog from '../../../../../../../common/icons/AppIconCatalog';

const addressBarIcons = AppIconCatalog['utilities']['browser']['addressBar'];

function AddressBarInputControl(): React.JSX.Element {
  const inputPlaceHolder = 'Address bar';
  const browserContext = useContext(BrowserContext);
  const browserHomeContext = useContext(BrowserHomeContext);
  const [inputValue, setInputValue] = useState('');

  const isUrlFIle = (url: string) => {
    url = new URL(url).href;
    if (url.endsWith('/')) url = url.substring(0, url.length - 1);
    const splitValue = url.split('/');
    if (splitValue) {
      const lastValue = splitValue.pop();
      const indexOfValue = lastValue?.indexOf('.');
      return indexOfValue && indexOfValue > 0;
    }
    return false;
  };

  const onSubmitEditing = () => {
    let urlValue = inputValue; // get current copy of inputValue.
    const validatedUrl = validateUrl(urlValue); // check if valid url.
    if (validatedUrl) {
      if (isUrlFIle(validatedUrl)) {
        const newUuid = uuid.v4().toString();
        browserContext.setFileDownloads(prevState => ({
          ...prevState,
          [newUuid]: {
            url: validatedUrl,
            name: undefined,
            bufferSize: undefined,
            chunks: [],
            encoding: undefined,
            size: undefined,
            status: 'new',
          },
        }));
        return;
      }
      let currentTabKey =
        browserContext.currentWebTabKey ?? uuid.v4().toString();
      let currentTab: IBrowserWebTab = {
        url: validatedUrl,
        historyStack: [],
        name: 'Home',
        nextTab: undefined,
        previousTab: undefined,
      };
      if (browserContext.currentWebTabKey) {
        const oldTabState = browserContext.webTabs[currentTabKey];
        currentTab = {
          ...oldTabState,
          historyStack: [...oldTabState.historyStack, oldTabState.url],
          url: validatedUrl,
        };
      }
      browserContext.setWebTabs(prevState => ({
        ...prevState,
        [currentTabKey]: currentTab,
      }));
    }
  };

  const validateUrl = (value: string) => {
    try {
      let updatedValue = value.trim();
      if (!updatedValue || updatedValue === '') throw new Error();
      const whiteSpaceCount = updatedValue.split(' ')?.length;
      const isDotCom =
        updatedValue.includes('.com') ||
        updatedValue.includes('http://') ||
        updatedValue.includes('https://');
      if (whiteSpaceCount > 1 || !isDotCom) {
        // probably a search. create a google search url.
        const urlParams = new URLSearchParams({
          q: updatedValue,
        });
        updatedValue = `https://www.google.com/search?${urlParams}`;
      }
      let parsedUrl = parseUrl(updatedValue);
      parsedUrl = new URL(parsedUrl).href;
      if (parsedUrl.endsWith('/'))
        parsedUrl = parsedUrl.substring(0, parsedUrl.length - 1);
      return parsedUrl;
    } catch (e) {
      return undefined;
    }
  };

  const parseUrl = (value: string) => {
    let updatedValue = value;
    if (updatedValue.startsWith('https://')) return updatedValue;
    else if (updatedValue.startsWith('http://')) return updatedValue;
    else if (updatedValue.startsWith('www.'))
      updatedValue = `https://${updatedValue}`;
    else updatedValue = `https://www.${updatedValue}`;
    return updatedValue;
  };

  const handleWebTabReload = () => {
    browserHomeContext.reload();
  };

  useEffect(() => {
    if (browserContext && browserContext.currentWebTabKey) {
      const currentTabKey = browserContext.currentWebTabKey;
      const url = browserContext.webTabs[currentTabKey]?.url;
      if (url !== undefined) setInputValue(url);
      else setInputValue('');
    }
  }, [browserContext.currentWebTabKey, browserContext.webTabs]);

  return (
    <View style={AddressBarInputControlStyles.container}>
      <TextInput
        placeholder={inputPlaceHolder}
        textContentType="URL"
        style={AddressBarInputControlStyles.control}
        onSubmitEditing={onSubmitEditing}
        onChangeText={text => setInputValue(text)}>
        {inputValue}
      </TextInput>
      <View style={AddressBarInputControlStyles.postfix}>
        <AddressBarButton
          icon={addressBarIcons['reload']}
          action={handleWebTabReload}
        />
      </View>
    </View>
  );
}

export default AddressBarInputControl;
