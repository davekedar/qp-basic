import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'


import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import AuthLoadingScreen from './SRC/screens/AuthLoadingScreen'
import WelcomeScreen from './SRC/screens/WelcomeScreen'
import SignInScreen from './SRC/screens/SignInScreen'
import SignUpScreen from './SRC/screens/SignUpScreen'
import HomeScreen from './SRC/screens/HomeScreen'
import SettingsScreen from './SRC/screens/SettingsScreen'


const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: () => (
        <Icon name="ios-home-outline" size={24} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'SETTINGS',
      tabBarIcon: () => (
        <Icon name="ios-settings-outline" size={24} />
      )
    }

  }
})


export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppTabNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});