import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { withTheme } from '../theming/themeProvider'
import { navigate } from '../navigationRef';

const ActionButton = ({ navigation, routeName, iconName, theme }) => {
    return (
        <TouchableOpacity style={[styles.actionFloatButton, {backgroundColor: theme.primaryColor}]} onPress={() => navigate(routeName, { id: navigation.getParam('id') })}>
            <Icon type='feather' name={iconName} size={35} style={[styles.floatButton, {color: theme.foregroundColor}]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    actionFloatButton: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 15,
        bottom: 15,
        borderRadius: 50
    },
    floatButton: {
        justifyContent: 'space-around'
    }
})

export default withTheme(ActionButton)