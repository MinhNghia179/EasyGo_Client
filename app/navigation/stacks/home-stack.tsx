import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../../constants/constant';
import HomeScreen from '../../screen/Home/HomeScreen';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen
        name={Route.HOME_STACK.HOME}
        component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
