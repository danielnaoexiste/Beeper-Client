import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { withTheme } from '../theming/themeProvider';

const AccountScreen = ({ navigation, theme }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
      <Spacer />
      <Text h3 style={[styles.header, {color: theme.textColor}]}>My Account</Text>
      <Spacer style={styles.buttonContainer}>
        <Button
          buttonStyle={{ backgroundColor: theme.primaryColor, marginHorizontal: 120, marginTop: 15 }}
          titleStyle={{ color: theme.foregroundColor }}
          title='Sign Out'
          onPress={signout} />
      </Spacer>

      <Spacer style={styles.buttonContainer}>
        <Button
          buttonStyle={{ backgroundColor: theme.primaryColor, marginHorizontal: 120, marginTop: 15 }}
          titleStyle={{ color: theme.foregroundColor }}
          title='Themes'
          onPress={() => navigation.navigate('Theme')} />
      </Spacer>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  },
  buttonContainer: {
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: "center"
  }
})

export default withTheme(AccountScreen);