import { StyleSheet } from "react-native";
import AppThemeComponentProps from "../../../../../../../Core/constants/resources/Components";

const AddressBarInputControlStyles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: AppThemeComponentProps.borderRadius.normal,
        borderColor: AppThemeComponentProps.border.color,
        borderWidth: AppThemeComponentProps.border.widths[2]
    },
    control: {
        flex: 1
    },
    postfix: {
        flex: 0,
        // width: 'auto',
        // height: 'auto',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'center'
    }
});

export default AddressBarInputControlStyles;