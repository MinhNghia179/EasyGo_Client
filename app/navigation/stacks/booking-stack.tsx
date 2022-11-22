import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../../constants/constant';
import BookingDetailsScreen from '../../screen/Booking/BookingDetailsScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        component={BookingDetailsScreen}
        name={Route.BOOKING_DETAILS_SCREEN}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default BookingStack;
