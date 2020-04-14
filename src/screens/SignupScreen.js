import React, { useContext } from "react";
import { View, StyleSheet, Keyboard } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { theme } from '../theming/themeProvider';

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillBlur={clearErrorMessage}
                    onWillFocus={clearErrorMessage}
                />
                <AuthForm
                    headerText="Sign Up to Beeper!"
                    errorMessage={state.errorMessage}
                    submitText='Sign Up'
                    onSubmit={signup}
                />
                <NavLink
                    routeName='Signin'
                    text='Already have an account? Sign in!'
                />

            </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 20,
        backgroundColor: theme.backgroundColor
    }
});

export default SignupScreen;