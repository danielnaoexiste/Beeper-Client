import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Context } from '../context/BeepContext';
import { EvilIcons } from '@expo/vector-icons';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer'
import ActionButton from '../components/ActionButton'
import { theme } from '../theming/themeProvider';

const BeepDetailScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  let beepPost = state.find((beepPost) => beepPost._id === navigation.getParam('id'))
  const [title, setTitle] = useState(beepPost.title);
  const [content, setContent] = useState(beepPost.content);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: theme.backgroundColor , flex: 1}}>
      <Spacer />
      <NavigationEvents
        onWillFocus={() => {
          setTitle(navigation.getParam('title') ? navigation.getParam('title') : beepPost.title)
          setContent(navigation.getParam('content') ? navigation.getParam('content') : beepPost.content)
        }}
      />
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.contentStyle}>{content}</Text>

      <ActionButton
        routeName='BeepEdit'
        iconName='edit'
        radius={100}
      />
    </SafeAreaView>
  );
};

BeepDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity style={{ right: 15 }} onPress={() => navigation.navigate('BeepEdit', { id: navigation.getParam('id') })}>
        <EvilIcons name='pencil' size={30} style={{ color: theme.textColor }} />
      </TouchableOpacity>
    ),
    title: "Beep"
  };
};

const styles = StyleSheet.create({
  col: {
    flexDirection: 'column',

  },
  titleStyle: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 15,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "grey",
    color: theme.textColor
  },
  contentStyle: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "justify",
    marginVertical: 10,
    marginHorizontal: 25,
    color: theme.textColor
  }
});

export default BeepDetailScreen;