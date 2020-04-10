import React, { useContext } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{borderColor: 'red', borderWidth: 10}}>
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

        </TouchableWithoutFeedback>
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
        backgroundColor: '#343434'
    }
});

export default SignupScreen;