import React from 'react';
import { enableLatestRenderer } from 'react-native-maps';
import { Provider } from 'react-redux';
import AppNavigator from './app/navigation/app-navigation';
import rootState from './app/redux/root-store';
import './app/services/app';

enableLatestRenderer();

const App = () => {
  return (
    <Provider store={rootState}>
      <AppNavigator></AppNavigator>
    </Provider>
  );
};

export default App;
