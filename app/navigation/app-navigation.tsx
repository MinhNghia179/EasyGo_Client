import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../constants/constant';
import AppStack from './app-stack';
import { noHeaderNavigationConfig } from './navigation-options';
import navigationService from './navigation-service';
import { LoginStack } from './stacks';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationService.navigationRef}>
      <Stack.Navigator
        screenOptions={noHeaderNavigationConfig}
        initialRouteName={Route.NON_AUTH}>
        <Stack.Screen
          name={Route.NON_AUTH}
          component={LoginStack}></Stack.Screen>
        <Stack.Screen name={Route.APP} component={AppStack}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
