import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import { Context as BeepContext } from '../context/BeepContext'
import { Icon } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation';
import Swipeable from 'react-native-gesture-handler/Swipeable'

const BeepList = ({ navigation, state, func, starred, leftText, rightText }) => {
  const { deletePost, starPost } = useContext(BeepContext)

  return (
    <View style={{marginBottom: 55, marginTop: 15}}>
      <NavigationEvents
        onWillFocus={func}
      />
      <FlatList
        inverted
        data={state}
        keyExtractor={(beepPost) => beepPost._id.toString()}
        renderItem={({ item }) => {
          return (
            <Swipeable
              renderLeftActions={(progress, dragX) => <LeftActions
                progress={progress}
                dragX={dragX}
                containerStyle
                onPress={() => starPost(item._id, func, starred)}
                leftText={leftText}
              />}
              renderRightActions={(progress, dragX) => <RightActions progress={progress} dragX={dragX} onPress={() => deletePost(item._id)} rightText={rightText} />}
            >
              <TouchableOpacity onPress={() => navigation.navigate('BeepDetail', { id: item._id })}>
                <View style={styles.row}>
                  <Text style={styles.title}>{item.title}</Text>
                  {item.starred ? <Icon type='foundation' name='star' size={16} color='#fff' /> : null}
                </View>
                <Text style={styles.date}>Last edited in: {item.lastEdited}</Text>
              </TouchableOpacity>
            </Swipeable>
          );
        }}

      />
    </View>
  );
};

const LeftActions = ({ progress, dragX, onPress, leftText }) => {

  const scale = dragX.interpolate({
    inputRange: [0, 75],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  return (
    <TouchableOpacity style={styles.leftAction} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Icon type='foundation' name='star' color='#fff' />
        <Text style={styles.actionText}>{leftText}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const RightActions = ({ progress, dragX, onPress, rightText }) => {
  const scale = dragX.interpolate({
    inputRange: [-75, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (

    <TouchableOpacity style={styles.rightAction} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Icon type='feather' name='trash' color='#fff' />
        <Text style={styles.actionText}>{rightText}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  date: {
    paddingBottom: 10,
    paddingHorizontal: 20,
    color: 'grey'
  },
  title: {
    fontSize: 18,
    color: '#fff'
  },
  icon: {
    fontSize: 24
  },
  leftAction: {
    backgroundColor: "#678f75",
    justifyContent: 'center',
    paddingHorizontal: 15,
    alignItems: "center"
  },
  rightAction: {
    backgroundColor: "#c33b3b",
    justifyContent: 'center',
    paddingHorizontal: 25,
    alignItems: "flex-end"
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: 'center'
  },
});

export default BeepList;