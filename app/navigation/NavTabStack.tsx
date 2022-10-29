import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Route } from '../constants/constant';
import AccountScreen from '../screen/Account/AccountScreen';
import ActivityScreen from '../screen/Activity/ActivityScreen';
import HomeScreen from '../screen/Home/HomeDetailScreen';
import MessageScreen from '../screen/Message/MessageScreen';
import PaymentScreen from '../screen/Payment/PaymentScreen';
import { Colors } from '../styles/colors';
import IconSizes from '../styles/icon-size';
import { HomeStack } from './stacks';

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
      initialRouteName={Route.HOME}>
      <Tab.Screen
        name={Route.HOME}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="home" size={IconSizes.small} />,
        }}></Tab.Screen>

      <Tab.Screen
        name={Route.ACTIVITY}
        component={ActivityScreen}
        options={{
          tabBarLabel: 'Activity',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="book" size={IconSizes.small} />,
        }}></Tab.Screen>

      <Tab.Screen
        name={Route.PAYMENT}
        component={PaymentScreen}
        options={{
          tabBarLabel: 'Payment',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => (
            <Icon name="creditcard" size={IconSizes.small} />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name={Route.MESSAGE}
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="message1" size={IconSizes.small} />,
        }}></Tab.Screen>

      <Tab.Screen
        name={Route.ACCOUNT}
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: Colors.Text.Primary,
          tabBarIcon: props => <Icon name="user" size={IconSizes.small} />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default NavTabStack;
