import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BookingStackRoute } from '../../constants/constant';
import CancelTripScreen from '../../screen/Booking/CancelTripScreen';
import CreateBookingGuidPanel from '../../screen/Booking/CreateBookingGuidPanel';
import RateDriverScreen from '../../screen/Booking/RateDriverScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={noHeaderNavigationConfig}
      initialRouteName={BookingStackRoute.CANCEL_TRIP}>
      <Stack.Screen
        component={RateDriverScreen}
        name={BookingStackRoute.CANCEL_TRIP}></Stack.Screen>
      {/* <Stack.Screen
        component={CreateBookingGuidPanel}
        name={BookingStackRoute.DASHBOARD}></Stack.Screen> */}
    </Stack.Navigator>
  );
};

export default BookingStack;
