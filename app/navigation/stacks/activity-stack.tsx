import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ActivityStackRoute } from '../../constants/constant';
import ActivityScreen from '../../screen/Activity/ActivityScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const ActivityStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        component={ActivityScreen}
        name={ActivityStackRoute.DASHBOARD}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ActivityStack;
