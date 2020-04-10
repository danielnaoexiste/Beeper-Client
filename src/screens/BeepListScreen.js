import React, { useContext } from 'react';
import { Context as BeepContext } from '../context/BeepContext';
import BeepList from '../components/BeepList';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import ActionButton from '../components/ActionButton'

const BeepListScreen = ({ navigation }) => {
  const { state, getPosts } = useContext(BeepContext)

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{backgroundColor: "#343434", flex: 1 }}>
      <Spacer />
      <Text h3 style={styles.header}>My Beeps</Text>
      <Spacer>
        <BeepList navigation={navigation} state={state} func={getPosts} starred={true} leftText='Add to Favorites' rightText='Delete' />
      </Spacer>
      <ActionButton
        routeName='BeepCreate'
        iconName='plus'
        radius={50}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    color: '#fff'
  },
  actionFloatButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0
  },
  floatButton: {
    width: 50,
    height: 50,
  }
})

export default BeepListScreen;