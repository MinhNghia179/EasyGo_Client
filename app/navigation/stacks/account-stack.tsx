import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AccountStackRoute } from '../../constants/constant';
import AccountScreen from '../../screen/Account/AccountScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        component={AccountScreen}
        name={AccountStackRoute.DASHBOARD}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountStack;
