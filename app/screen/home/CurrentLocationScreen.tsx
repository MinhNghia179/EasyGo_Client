import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../components/Button/PrimaryButton';
import BingMap from '../../components/Map/Map';
import { SafeAreaContainer } from '../../components/View';
import { IRootState } from '../../redux/root-store';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

import AddressDetailsSection from './components/AddressDetailsSection';

interface IProps {
  navigation: StackNavigationProp<any, 'Home'>;
}

const CurrentLocationScreen = (props: IProps) => {
  const { navigation } = props;

  const { currentLocation, isLoading } = useSelector((state: IRootState) => ({
    currentLocation: state.homeStore.currentLocation,
    isLoading: state.homeStore.isLoading,
  }));

  return (
    <SafeAreaContainer
      loadingView={isLoading}
      stickyBottom={
        <View
          style={[
            {
              backgroundColor: Colors.White,
              padding: 10,
            },
          ]}>
          <AddressDetailsSection
            currentLocation={currentLocation}
            onPress={() => {}}
          />

          <PrimaryButton style={[styles.mt_medium]} color={Colors.Green500}>
            Confirm pick up point
          </PrimaryButton>
        </View>
      }>
      <BingMap
        location={{ lat: currentLocation.lat, long: currentLocation.long }}
      />
    </SafeAreaContainer>
  );
};

export default CurrentLocationScreen;
