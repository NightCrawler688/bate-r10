import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from '../screens/SettingScreen';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonations from '../screens/MyDonation'
import Notification from '../screens/Notification';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen'


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    MyDonations:{
      screen: MyDonations
    },
    Notification:{
      screen:Notification
    },
    MyReceivedBooks:{
      screen:MyReceivedBooksScreen
    },
    
Settings:{
    screen : SettingScreen
    }
    
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })