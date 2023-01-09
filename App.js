import React from 'react';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { Provider } from 'react-redux';
import AppNavigator from './app/navigation/app-navigation';
import rootState from './app/redux/root-store';

const App = () => {
  return (
    <Provider store={rootState}>
      <AlertNotificationRoot>
        <AppNavigator></AppNavigator>
      </AlertNotificationRoot>
    </Provider>
  );
};

export default App;
