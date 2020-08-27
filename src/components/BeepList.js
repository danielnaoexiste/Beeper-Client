import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Context as BeepContext } from "../context/BeepContext";
import { Icon } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { withTheme } from "../theming/themeProvider";

const BeepList = ({
  navigation,
  state,
  func,
  starred,
  leftText,
  rightText,
  theme,
}) => {
  const { deletePost, starPost } = useContext(BeepContext);

  // Sorts by last edited
  state.sort(function (a, b) {
    return new Date(b.lastEdited) - new Date(a.lastEdited);
  });

  return (
    <View style={{ marginBottom: 55, marginTop: 15 }}>
      <NavigationEvents onWillFocus={func} />
      <FlatList
        data={state}
        keyExtractor={(beepPost) => beepPost._id.toString()}
        renderItem={({ item }) => {
          return (
            <Swipeable
              renderLeftActions={(progress, dragX) => (
                <LeftActions
                  progress={progress}
                  dragX={dragX}
                  containerStyle
                  onPress={() => starPost(item._id, func, starred)}
                  leftText={leftText}
                  bgColor={{ backgroundColor: theme.favouritesColor }}
                  textColor={theme.textColor}
                />
              )}
              renderRightActions={(progress, dragX) => (
                <RightActions
                  progress={progress}
                  dragX={dragX}
                  onPress={() => deletePost(item._id)}
                  rightText={rightText}
                  bgColor={{ backgroundColor: theme.errorColor }}
                  textColor={theme.textColor}
                />
              )}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("BeepDetail", { id: item._id })
                }>
                <View style={[styles.row, { borderColor: theme.dividerColor }]}>
                  <Text style={[styles.title, { color: theme.textColor }]}>
                    {item.title}
                  </Text>
                  {item.starred ? (
                    <Icon
                      type="foundation"
                      name="star"
                      size={16}
                      color={theme.textColor}
                    />
                  ) : null}
                </View>
                <Text style={[styles.date, { color: theme.dividerColor }]}>
                  Last edited in: {item.lastEdited}
                </Text>
              </TouchableOpacity>
            </Swipeable>
          );
        }}
      />
    </View>
  );
};

const LeftActions = ({
  progress,
  dragX,
  onPress,
  leftText,
  bgColor,
  textColor,
}) => {
  const scale = dragX.interpolate({
    inputRange: [0, 75],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <TouchableOpacity style={[styles.leftAction, bgColor]} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Icon type="foundation" name="star" color={textColor} />
        <Text style={[styles.actionText, { color: textColor }]}>
          {leftText}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const RightActions = ({
  progress,
  dragX,
  onPress,
  rightText,
  bgColor,
  textColor,
}) => {
  const scale = dragX.interpolate({
    inputRange: [-75, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <TouchableOpacity style={[styles.rightAction, bgColor]} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Icon type="feather" name="trash" color={textColor} />
        <Text style={[styles.actionText, { color: textColor }]}>
          {rightText}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
  },
  date: {
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  leftAction: {
    justifyContent: "center",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  rightAction: {
    justifyContent: "center",
    paddingHorizontal: 25,
    alignItems: "flex-end",
  },
  actionText: {
    fontWeight: "600",
    textAlign: "center",
  },
});

export default withTheme(BeepList);
