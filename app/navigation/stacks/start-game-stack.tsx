import { createStackNavigator } from '@react-navigation/stack';
import { noHeaderNavigationConfig } from '../navigation-options';

const Stack = createStackNavigator();

const StartGameStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen name="" component={() => <></>}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StartGameStack;
