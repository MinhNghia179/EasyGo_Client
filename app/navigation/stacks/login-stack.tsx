import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../../constants/constant';
import LoginScreen from '../../screen/Login/LoginScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Route.LOGIN}
      screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen name={Route.LOGIN} component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default LoginStack;
