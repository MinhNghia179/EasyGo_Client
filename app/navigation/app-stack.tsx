import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../constants/constant';
import { noHeaderNavigationConfig } from './navigation-options';
import NavTabStack from './NavTabStack';
import { BookingStack, HomeStack } from './stacks';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Route.MAIN_APP}
      screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        name={Route.MAIN_APP}
        component={NavTabStack}></Stack.Screen>
      <Stack.Screen name={Route.HOME} component={HomeStack}></Stack.Screen>
      <Stack.Screen
        name={Route.BOOKING}
        component={BookingStack}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppStack;
