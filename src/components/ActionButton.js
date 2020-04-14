import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import { theme } from '../theming/themeProvider'

const ActionButton = ({ navigation, routeName, iconName }) => {
    return (
        <TouchableOpacity style={styles.actionFloatButton} onPress={() => navigation.navigate(routeName, { id: navigation.getParam('id') })}>
            <Icon type='feather' name={iconName} size={35} style={styles.floatButton} />
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
        backgroundColor: theme.primaryColor,
        borderRadius: 50
    },
    floatButton: {
        justifyContent: 'space-around',
        color: theme.foregroundColor
    }
})

export default withNavigation(ActionButton)