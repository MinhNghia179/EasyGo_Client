import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeStackRoute } from '../../constants/constant';
import HomeScreen from '../../screen/Home/HomeDetailScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeStackRoute.DASHBOARD}
      screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        name={HomeStackRoute.DASHBOARD}
        component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
