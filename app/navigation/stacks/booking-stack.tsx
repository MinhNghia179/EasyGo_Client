import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BookingStackRoute } from '../../constants/constant';
import BookingDetailsScreen from '../../screen/Booking/BookingDetailsScreen';
import CancelTripScreen from '../../screen/Booking/CancelTripScreen';
import CreateBookingGuidPanel from '../../screen/Booking/CreateBookingGuidPanel';
import RateDriverScreen from '../../screen/Booking/RateDriverScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={noHeaderNavigationConfig}
      initialRouteName={BookingStackRoute.CREATE_BOOKING_GUID}>
      <Stack.Screen
        component={CreateBookingGuidPanel}
        name={BookingStackRoute.CREATE_BOOKING_GUID}></Stack.Screen>
      <Stack.Screen
        component={CancelTripScreen}
        name={BookingStackRoute.CANCEL_TRIP}></Stack.Screen>
      <Stack.Screen
        component={BookingDetailsScreen}
        name={BookingStackRoute.BOOKING_DETAILS}></Stack.Screen>
      <Stack.Screen
        component={RateDriverScreen}
        name={BookingStackRoute.RATE_DRIVER}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default BookingStack;
