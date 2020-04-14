import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { withTheme } from '../theming/themeProvider'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitText, theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text style={{ color: theme.primaryColor, textAlign: "center" }} h3>{headerText}</Text>
            </Spacer>

            <Spacer />

            <Input
                label="Email"
                inputStyle={{ color: theme.textColor }}
                labelStyle={{ color: theme.textColor }}
                placeholder="email@adress.com"
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
                leftIcon={{ type: 'Feather', name: 'mail', marginRight: 15, color: theme.textColor }}
            />


            <Spacer />

            <Input
                inputStyle={{ color: theme.textColor }}
                labelStyle={{ color: theme.textColor }}
                secureTextEntry
                placeholder="Password"
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                leftIcon={{ type: 'Feather', name: 'lock', marginRight: 15, color: theme.textColor }}
            />

            {errorMessage ? <Text style={[styles.errorMessage, { color: theme.errorColor }]}>{errorMessage}</Text> : null}

            <Spacer />

            <Spacer style={styles.buttonContainer}>
                <Button buttonStyle={{
                    backgroundColor: theme.primaryColor,
                    marginHorizontal: 120
                }}
                    titleStyle={{ color: theme.foregroundColor }}
                    title={submitText}
                    onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15,
    },
    buttonContainer: {
        marginVertical: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: "center"
    }
})

export default withTheme(AuthForm);