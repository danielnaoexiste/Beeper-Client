import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import { theme } from '../theming/themeProvider';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
            <Text style={styles.link}>{text}</Text>
        </Spacer>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: theme.navlinkColor,
        fontSize: 16
    }
});

export default withNavigation(NavLink)