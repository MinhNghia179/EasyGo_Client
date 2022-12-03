import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Route } from '../constants/constant';
import { Colors } from '../styles/colors';
import IconSizes from '../styles/icon-size';
import {
  ActivityStack,
  BookingStack,
  HomeStack,
  MessageStack,
  PaymentStack,
} from './stacks';
import AccountStack from './stacks/account-stack';

const Tab = createMaterialBottomTabNavigator();

const NavTabStack = () => {
  return (
    <Tab.Navigator
      labeled={true}
      shifting={false}
      activeColor={Colors.Green800}
      inactiveColor={Colors.Grey400}
      barStyle={{
        backgroundColor: Colors.White,
        elevation: 2,
        borderTopColor: Colors.Grey400,
        borderTopWidth: 0.5,
      }}
      initialRouteName={Route.HOME_STACK}>
      <Tab.Screen
        name={Route.HOME_STACK}
        component={BookingStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="home" size={IconSizes.small} />,
        }}></Tab.Screen>

      <Tab.Screen
        name={Route.ACTIVITY_STACK}
        component={ActivityStack}
        options={{
          tabBarLabel: 'Activity',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="book" size={IconSizes.small} />,
        }}></Tab.Screen>

      <Tab.Screen
        name={Route.PAYMENT_STACK}
        component={PaymentStack}
        options={{
          tabBarLabel: 'Payment',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => (
            <Icon name="creditcard" size={IconSizes.small} />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name={Route.MESSAGE_STACK}
        component={MessageStack}
        options={{
          tabBarLabel: 'Message',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="message1" size={IconSizes.small} />,
        }}></Tab.Screen>

      <Tab.Screen
        name={Route.ACCOUNT_STACK}
        component={AccountStack}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="user" size={IconSizes.small} />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default NavTabStack;
