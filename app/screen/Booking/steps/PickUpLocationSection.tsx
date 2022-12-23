import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import LinkButton from '../../../components/Button/LinkButton';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import InputText from '../../../components/Input/InputText';
import { Text } from '../../../components/Text';
import { IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';
import LocationCard from '../components/LocationCard';

interface IProps {
  onOpenSearchAddressModal: () => void;
}

const PickUpLocationSection = (props: IProps) => {
  const { onOpenSearchAddressModal } = props;

  const [addNoteVisible, setAddNoteVisible] = useState<boolean>(false);
  const [noteText, setNoteText] = useState<string>('');

  const { currentLocation, createBookingWizard } = useSelector(
    (state: IRootState) => ({
      currentLocation: state.authStore.currentLocation,
      createBookingWizard: state.bookingStore.createBookingWizard,
    }),
  );

  return (
    <>
      <Text fontWeight="bold" type="subhead">
        Pick up location
      </Text>
      <Divider style={[styles.mv_small]} />
      <LocationCard
        label="Pick up (Current Location)"
        address={currentLocation}
      />
      <View style={[styles.mv_x_small]} />
      <LocationCard
        label="Drop off"
        onPress={onOpenSearchAddressModal}
        address={createBookingWizard?.dropOff}
      />
      <Divider style={[styles.mv_x2_small]} />
      <View style={[styles.mv_medium, styles.flex_row, styles.alg_center]}>
        {addNoteVisible ? (
          <View
            style={[
              {
                flexGrow: 1,
              },
            ]}>
            <InputText
              value={noteText}
              onChange={setNoteText}
              placeholder="Type note"
            />
          </View>
        ) : (
          <>
            <Icon
              name="pencil"
              size={IconSizes.x2_small}
              style={[styles.mh_small]}
            />
            <LinkButton onPress={() => setAddNoteVisible(true)} type="footnote">
              Additional notes about the pick up point for the driver
            </LinkButton>
          </>
        )}
      </View>
      <PrimaryButton color={Colors.Green}>
        Choose this pick up point
      </PrimaryButton>
    </>
  );
};

export default PickUpLocationSection;
