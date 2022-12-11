import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PaymentStackRoute } from '../../constants/constant';
import PaymentScreen from '../../screen/Payment/PaymentScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        component={PaymentScreen}
        name={PaymentStackRoute.DASHBOARD}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default PaymentStack;
