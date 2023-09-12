import { useContext, useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputSubmitEditingEventData, View, TextInput } from "react-native";
import { BrowserContext } from "../../../../../../../Core/providers/BrowserContextProvider";
import AddressBarInputControlStyles from "./AddressBarInputControl.stylesheet";
import AddressBarButton from "../AddressBarButton/AddressBarButton";
import { AppThemeBrowserWebTabIconProps } from "../../../../../../../Core/constants/resources/Icons";
import { BrowserHomeContext } from "../../../../../../../Core/providers/BrowserHomeContextProvider";

function AddressBarInputControl(): React.JSX.Element {
    const inputPlaceHolder = 'Address bar';
    const browserContext = useContext(BrowserContext);
    const browserHomeContext = useContext(BrowserHomeContext);
    const [inputValue, setInputValue] = useState('');

    const onSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        let urlValue = inputValue; // get current copy of inputValue.
        const validatedUrl = validateUrl(urlValue); // check if valid url.
        if (validatedUrl) {
            browserContext.setCurrentWebTab(prevState => ({
                ...prevState,
                url: validatedUrl.href,
                historyStack: [...prevState.historyStack, validatedUrl.href]
            }));
        }
    };

    const validateUrl = (value: string) => {
        try {
            let updatedValue = value.trim();
            if (!updatedValue || updatedValue === '') throw new Error();
            const whiteSpaceCount = updatedValue.split(' ')?.length;
            const isDotCom = updatedValue.includes('.com');
            if (whiteSpaceCount > 1 || !isDotCom) {
                // probably a search. create a google search url.
                const urlParams = new URLSearchParams({
                    q: updatedValue
                });
                updatedValue = `https://www.google.com/search?${urlParams}`;
            }
            const parsedUrl = parseUrl(updatedValue);
            return new URL(parsedUrl);

        } catch (e) {
            return undefined;
        }
    };

    const parseUrl = (value: string) => {
        let updatedValue = value;
        if (updatedValue.startsWith('https://')) return updatedValue;
        else if (updatedValue.startsWith('http://')) return updatedValue;
        else if (updatedValue.startsWith('www.')) updatedValue = `https://${updatedValue}`;
        else updatedValue = `https://www.${updatedValue}`;
        return updatedValue;
    };

    const handleWebTabReload = () => {
        browserHomeContext.reload();
    }

    useEffect(() => {
        if (browserContext && browserContext.currentWebTab) {
            const url = browserContext.currentWebTab.url;
            if (url !== undefined) setInputValue(url);
            else setInputValue('');
        }

    }, [browserContext.currentWebTab]);

    return (
        <View style={AddressBarInputControlStyles.container}>
            <TextInput
                placeholder={inputPlaceHolder}
                textContentType="URL"
                style={AddressBarInputControlStyles.control}
                onSubmitEditing={onSubmitEditing}
                onChangeText={(text) => setInputValue(text)}>
                {inputValue}
            </TextInput>
            <View style={AddressBarInputControlStyles.postfix}>
                <AddressBarButton
                    icon={AppThemeBrowserWebTabIconProps.ReloadIcon}
                    action={handleWebTabReload} />
            </View>
        </View>
    );
};

export default AddressBarInputControl;