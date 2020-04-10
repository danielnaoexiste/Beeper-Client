import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as BeepProvider } from './src/context/BeepContext'
import { setNavigator } from './src/navigationRef'
import { Icon } from 'react-native-elements';

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import BeepCreateScreen from './src/screens/BeepCreateScreen'
import BeepDetailScreen from './src/screens/BeepDetailScreen'
import BeepListScreen from './src/screens/BeepListScreen'
import BeepEditScreen from './src/screens/BeepEditScreen'
import BeepStarredScreen from './src/screens/BeepStarredScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    beepListFlow: {
      screen: createStackNavigator({
        BeepList: BeepListScreen,
        BeepDetail: BeepDetailScreen,
        BeepCreate: BeepCreateScreen,
        BeepEdit: BeepEditScreen
      }, {
        initialRouteName: 'BeepList',
        defaultNavigationOptions: {
          title: 'Beeps',
          headerShown: false
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon type='Feather' name='list' color={tintColor} />,
        tabBarLabel: 'Beeps',
      },
    },
    BeepStarred: {
      screen: BeepStarredScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon type='foundation' name='star' color={tintColor} />,
        tabBarLabel: 'Starred',
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon type='MaterialIcons' name='person' color={tintColor} />,
        tabBarLabel: 'Account',
      },
    } 
  }, {
    defaultNavigationOptions: {
      tabBarOptions: {  style: {height: 50}, activeTintColor: '#BB86F6', inactiveTintColor: 'white', activeBackgroundColor: '#343434', inactiveBackgroundColor: '#343434', safeAreaInset: {bottom: 'never'} }
    }
  })
})

const App = createAppContainer(switchNavigator);

  export default() => {
  return (
    <BeepProvider>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </AuthProvider>
    </BeepProvider>
  )
}