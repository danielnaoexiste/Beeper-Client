import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text style={{color: '#BB86F6', textAlign: "center"}} h3>{headerText}</Text>
            </Spacer>

            <Spacer />
            
            <Input
                label="Email"
                inputStyle={{ color: '#fff' }}
                labelStyle={{ color: '#fff' }}
                placeholder="email@adress.com"
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
                leftIcon={{ type: 'Feather', name: 'mail', marginRight: 15, color: '#fff' }}
            />


            <Spacer />

            <Input
                inputStyle={{ color: '#fff' }}
                labelStyle={{ color: '#fff' }}
                secureTextEntry
                placeholder="Password"
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                leftIcon={{ type: 'Feather', name: 'lock', marginRight: 15, color: '#fff' }}
            />

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <Spacer />

            <Spacer style={styles.buttonContainer}>
                <Button buttonStyle={{backgroundColor: '#BB86F6', marginHorizontal: 120}} titleStyle={{color: '#282d34'}} title={submitText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: '#c33b3b',
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

export default AuthForm;