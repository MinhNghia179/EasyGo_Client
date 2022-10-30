import { isEmpty } from 'lodash';
import React from 'react';
import { View } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { ILocation } from '../../../interfaces/home-interfaces';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import AddressDetailsSection from '../components/AddressDetailsSection';

interface IProps {
  currentLocation?: ILocation;
  destination?: ILocation;
  onPressShowModal?: () => void;
  onConfirm?: () => void;
}
const PickUpLocation = (props: IProps) => {
  const { currentLocation, destination, onPressShowModal, onConfirm } = props;

  return (
    <>
      <Text fontWeight="bold">From</Text>
      <View>
        <AddressDetailsSection location={currentLocation} onPress={() => {}} />
      </View>

      <View style={[styles.mt_small]}>
        <Text fontWeight="bold">To</Text>
        <AddressDetailsSection
          location={destination}
          onPress={onPressShowModal}
        />
      </View>

      <PrimaryButton
        onPress={onConfirm}
        style={[styles.mt_medium]}
        disable={isEmpty(destination)}
        color={Colors.Green500}>
        Confirm pick up point
      </PrimaryButton>
    </>
  );
};

export default PickUpLocation;
