import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginStackRoute } from '../../constants/constant';
import LoginScreen from '../../screen/Login/LoginScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={LoginStackRoute.LOGIN}
      screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        name={LoginStackRoute.LOGIN}
        component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default LoginStack;
