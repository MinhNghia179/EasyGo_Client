import {createStackNavigator} from '@react-navigation/stack';
import {Route} from '../constants/constant';
import AboutScreen from '../screen/about/AboutScreen';
import FeedbackScreen from '../screen/feedback/FeedbackScreen';
import HighScoreScreen from '../screen/high-score/HighScoreScreen';
import {noHeaderNavigationConfig} from './navigation-options';
import StartGameStack from './stacks/start-game-stack';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderNavigationConfig}>
      <Stack.Screen name={Route.ABOUT} component={AboutScreen}></Stack.Screen>
      <Stack.Screen
        name={Route.FEED_BACK}
        component={FeedbackScreen}></Stack.Screen>
      <Stack.Screen
        name={Route.HIGH_SCORE}
        component={HighScoreScreen}></Stack.Screen>
      <Stack.Screen
        name={Route.START_GAME}
        component={StartGameStack}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppStack;
