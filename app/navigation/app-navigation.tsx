import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../constants/constant';
import AppStack from './app-stack';
import { noHeaderNavigationConfig } from './navigation-options';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={noHeaderNavigationConfig}
        initialRouteName={Route.APP}>
        <Stack.Screen name={Route.APP} component={AppStack}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
