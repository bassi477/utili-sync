import React, { useState } from "react";
import { Text, View } from "react-native";

function BrowserDownloadsScreen(): JSX.Element {
    const [test, setTest] = useState();
    return (
        <View>
            <Text>
                This is BrowserDownloadsScreen
            </Text>
        </View>
    );
};

export default BrowserDownloadsScreen;