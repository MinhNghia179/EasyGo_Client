import { useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { Text } from '../../components/Text';
import navigationService from '../../navigation/navigation-service';

interface IProps {
  navigation: StackNavigationProp<any, 'Home'>;
}

const CurrentLocationScreen = (props: IProps) => {
  const { navigation } = props;

  const route: any = useRoute();

  console.log(navigationService.getParam(route, 'teamMembers', 'not value'));

  console.log(navigation);
  return (
    <View>
      <Text>CurrentLocationScreen</Text>
      <PrimaryButton onPress={() => navigation.goBack()}>Go Back</PrimaryButton>
    </View>
  );
};

export default CurrentLocationScreen;
