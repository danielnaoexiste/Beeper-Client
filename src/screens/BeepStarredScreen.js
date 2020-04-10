import React, { useContext } from 'react';
import { Context as BeepContext } from '../context/BeepContext'
import BeepList from '../components/BeepList'
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet } from 'react-native';
import Spacer from '../components/Spacer'

const BeepListScreen = ({ navigation }) => {
  const { state, getStars } = useContext(BeepContext)

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{backgroundColor: '#343434', flex: 1 }}>
      <Spacer />
      <Text h3 style={styles.header}>Starred Beeps</Text>
      <Spacer>
        <BeepList navigation={navigation} state={state} func={getStars} starred={false} leftText='Remove from Favorites' rightText='Delete' />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    color: '#fff'
  }
})

export default BeepListScreen;