import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { withTheme } from "../theming/themeProvider";

const SigninScreen = ({ theme }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign In to Beeper!"
                errorMessage={state.errorMessage}
                submitText='Sign In'
                onSubmit={signin}
            />
            <NavLink 
                routeName='Signup'
                text="Don't have an account? Sign up now!"
            />

        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 20
    }
});

export default withTheme(SigninScreen);