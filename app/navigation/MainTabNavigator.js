import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import MyDogsScreen from '../screens/MyDogsScreen';

const MyDogsStack = createStackNavigator({
  MyDogs: MyDogsScreen
});

MyDogsStack.navigationOptions = {
  tabBarLabel: 'Mine hunde',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};


export default createBottomTabNavigator({
  MyDogsStack
});
