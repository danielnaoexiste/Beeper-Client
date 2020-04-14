import React, { useContext } from 'react';
import { Context as BeepContext } from '../context/BeepContext'
import BeepList from '../components/BeepList'
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet } from 'react-native';
import Spacer from '../components/Spacer'
import { withTheme } from '../theming/themeProvider';

const BeepListScreen = ({ navigation, theme }) => {
  const { state, getStars } = useContext(BeepContext)

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{backgroundColor: theme.backgroundColor, flex: 1 }}>
      <Spacer />
      <Text h3 style={[styles.header, {color: theme.textColor}]}>Starred Beeps</Text>
      <Spacer>
        <BeepList navigation={navigation} state={state} func={getStars} starred={false} leftText='Remove from Favorites' rightText='Delete' />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center'
  }
})

export default withTheme(BeepListScreen);