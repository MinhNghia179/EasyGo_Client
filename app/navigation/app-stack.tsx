import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../constants/constant';
import { noHeaderNavigationConfig } from './navigation-options';
import NavTabStack from './NavTabStack';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        name={Route.MAIN_APP}
        component={NavTabStack}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppStack;
