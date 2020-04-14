import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';

import { withTheme } from '../theming/themeProvider';

const TabBar = props => {
  return (
    <BottomTabBar
      {...props}
      style={{ height: 50 }}
      activeTintColor={props.theme.primaryColor}
      inactiveTintColor={props.theme.textColor}
      activeBackgroundColor={props.theme.foregroundColor}
      inactiveBackgroundColor={props.theme.foregroundColor}
      safeAreaInset={{ bottom: 'never' }}
    />
  );
};

const style = StyleSheet.create({});

export default withTheme(TabBar);