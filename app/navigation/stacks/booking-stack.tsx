import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen component={() => <></>} name=""></Stack.Screen>
    </Stack.Navigator>
  );
};

export default BookingStack;
