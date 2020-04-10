import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'; 
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'


const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{backgroundColor: '#343434', flex: 1 }}>
        <Spacer />
        <Text h3 style={styles.header}>My Account</Text>
        <Spacer style={styles.buttonContainer}>
            <Button 
              buttonStyle={{backgroundColor: '#BB86F6', marginHorizontal: 120, marginTop: 15}}
              titleStyle={{color: "#282d34"}}
              title='Sign Out' 
              onPress={signout}/>
        </Spacer>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
      textAlign: 'center',
      color: '#fff'
    },
    buttonContainer: {
      marginVertical: 15,
      marginHorizontal: 15,
      flexDirection: 'row',
      justifyContent: "center" 
    }
  })

export default AccountScreen;