import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MessageStackRoute } from '../../constants/constant';
import MessageScreen from '../../screen/Message/MessageScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        component={MessageScreen}
        name={MessageStackRoute.DASHBOARD}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MessageStack;
