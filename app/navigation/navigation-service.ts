import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { Route } from '../constants/constant';

const navigationRef: any = React.createRef();

// TODO: keep this method for any different navigation - CommonActions, StackActions, TabActions, DrawerActions
function dispatchActions(routeName: string, params: any) {
  return navigationRef.current?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

function navigate(routeName: string, params: any) {
  const navigation = _getNavigation(routeName, params);
  navigationRef.current?.navigate(navigation.route, navigation.params);
}

function getParam(route: any, paramName: string, defaultValue: any): any {
  return route.params && route.params[paramName]
    ? route.params[paramName]
    : defaultValue;
}

function _getNavigation(route: string, params: any) {
  let navParams = null;
  let navRoute = route;

  switch (route) {
    case Route.HOME_DETAIL_SCREEN:
      {
        navRoute = Route.APP;
        navParams = {
          screen: Route.HOME,
          params: {
            screen: route,
            params: params,
          },
        };
      }
      break;
    case Route.CURRENT_LOCATION:
      {
        navRoute = Route.APP;
        navParams = {
          screen: Route.HOME,
          params: {
            screen: route,
            params: params,
          },
        };
      }
      break;
    case Route.LOGIN: {
      navRoute = Route.NON_AUTH;
      navParams = {
        params: {
          screen: route,
          params: params,
        },
      };
    }
  }

  return { route: navRoute, params: navParams };
}

// add other navigation functions that you need and export them
export default {
  navigationRef,
  navigate,
  getParam,
  dispatchActions,
};
