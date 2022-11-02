import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../../constants/constant';
import CurrentLocationScreen from '../../screen/Home/CurrentLocationScreen';
import HomeScreen from '../../screen/Home/HomeDetailScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Route.HOME_DETAIL_SCREEN}
      screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        name={Route.HOME_DETAIL_SCREEN}
        component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name={Route.CURRENT_LOCATION}
        component={CurrentLocationScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
