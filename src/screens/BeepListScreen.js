import React, { useContext } from "react";
import { Context as BeepContext } from "../context/BeepContext";
import BeepList from "../components/BeepList";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Text, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import ActionButton from "../components/ActionButton";
import { withTheme } from "../theming/themeProvider";

const BeepListScreen = ({ navigation, theme }) => {
  const { state, getPosts } = useContext(BeepContext);

  return (
    <SafeAreaView
      forceInset={{ top: "always" }}
      style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
      <Spacer />
      <Text h3 style={[styles.header, { color: theme.textColor }]}>
        My Beeps
      </Text>
      <Spacer>
        <BeepList
          navigation={navigation}
          state={state}
          func={getPosts}
          starred={true}
          leftText="Add to Favorites"
          rightText="Delete"
        />
      </Spacer>
      <ActionButton routeName="BeepCreate" iconName="plus" radius={50} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
  },
  actionFloatButton: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
  },
  floatButton: {
    width: 50,
    height: 50,
  },
});

export default withTheme(BeepListScreen);
