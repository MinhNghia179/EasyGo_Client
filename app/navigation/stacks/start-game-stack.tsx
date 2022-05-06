import {createStackNavigator} from '@react-navigation/stack';
import StartGameScreen from '../../screen/start-game/StartGameScreen';
import {noHeaderNavigationConfig} from '../navigation-options';

const Stack = createStackNavigator();

const StartGameStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen name={''} component={StartGameScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StartGameStack;
