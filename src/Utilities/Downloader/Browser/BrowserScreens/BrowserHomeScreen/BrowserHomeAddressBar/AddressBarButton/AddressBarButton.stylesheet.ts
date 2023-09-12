import { StyleSheet } from "react-native";
import AppThemeNavProps from "../../../../../../../Core/constants/resources/Nav";

const AddressBarButtonStyles = StyleSheet.create({
    btnContainer: {
        flex: 0,
        width: 'auto',
        height: 'auto',
        backgroundColor: 'transparent',
        
    },
    btnHighlight: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        paddingHorizontal: AppThemeNavProps.nav.link.paddingX,
        paddingVertical: AppThemeNavProps.nav.link.paddingY,
        fontSize: AppThemeNavProps.nav.link.font.size,
        fontWeight: AppThemeNavProps.nav.link.font.weight,
        color: AppThemeNavProps.nav.link.color.base,
        textDecorationStyle: null,
        backgroundColor: 'transparent',
    },
});

export default AddressBarButtonStyles;