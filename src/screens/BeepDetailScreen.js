import React, { useContext, useState } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { Text } from 'react-native-elements';
import { Context } from '../context/BeepContext';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer'
import ActionButton from '../components/ActionButton'
import { withTheme } from '../theming/themeProvider';

const BeepDetailScreen = ({ navigation, theme }) => {
  try {
    const { state } = useContext(Context);

    let beepPost = state.find((beepPost) => beepPost._id === navigation.getParam('id'))

    const [title, setTitle] = useState(beepPost.title);
    const [content, setContent] = useState(beepPost.content);

    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
        <Spacer />
        <NavigationEvents
          onWillFocus={() => {

            setTitle(navigation.getParam('title') ? navigation.getParam('title') : beepPost.title)
            setContent(navigation.getParam('content') ? navigation.getParam('content') : beepPost.content)
          }}
        />
        <Text style={[styles.titleStyle, { color: theme.textColor, borderColor: theme.dividerColor }]}>{title}</Text>
        <Text style={[styles.contentStyle, { color: theme.textColor }]}>{content}</Text>

        <ActionButton
          routeName='BeepEdit'
          iconName='edit'
          radius={100}
        />
      </SafeAreaView>
    );
  } catch (e) {
    return <SafeAreaView forceInset={{ top: 'always' }} style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
      <Text style={[styles.titleStyle, { color: theme.textColor, borderColor: theme.dividerColor }]}>Something went wrong!</Text>
      <Text style={[styles.contentStyle, { color: theme.textColor }]}>Please re-open the beep!</Text>
    </SafeAreaView>
  }
};

BeepDetailScreen.navigationOptions = ({ navigation }) => {
  // let tabBarVisible = true;
  // if (navigation.state.index > 0) {
  //   tabBarVisible = false;
  // }

  // return {
  //   tabBarVisible,
  // };
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
    borderColor: "grey"
  },
  contentStyle: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "justify",
    marginVertical: 10,
    marginHorizontal: 25
  }
});

export default withTheme(BeepDetailScreen);