import { round } from 'lodash';
import React, { useState } from 'react';
import { View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../../../components/Button/LinkButton';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import InputText from '../../../components/Input/InputText';
import { BottomSheetModal } from '../../../components/Modal';
import { Text } from '../../../components/Text';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';
import LocationCard from '../components/LocationCard';

interface IProps {
  onOpenSearchAddressModal: () => void;
  nextStep: () => void;
}

interface IIteamProps {
  label: string;
  value?: number;
  unit?: string;
  iconName?: string;
}

const Item = (props: IIteamProps) => {
  const { label, value, unit, iconName } = props;
  return (
    <View style={[styles.mv_x_small, styles.flex_row, styles.alg_center]}>
      {!!iconName && (
        <Icon
          style={[styles.mh_x_small]}
          name={iconName}
          color={Colors.Grey400}
          size={IconSizes.x2_small}
        />
      )}
      <Text type="caption1" color={Colors.Text.GreySecondary}>
        {label}: &nbsp;
        <Text fontWeight="bold">
          {value || 0.0}({unit})
        </Text>
      </Text>
    </View>
  );
};

const PickUpLocationSection = (props: IProps) => {
  const { onOpenSearchAddressModal, nextStep } = props;

  const dispatch = useDispatch<IRootDispatch>();

  const [addNoteVisible, setAddNoteVisible] = useState<boolean>(false);
  const [noteText, setNoteText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { currentLocation, createBookingWizard } = useSelector(
    (state: IRootState) => ({
      currentLocation: state.authStore.currentLocation,
      createBookingWizard: state.bookingStore.createBookingWizard,
    }),
  );

  const handleOnClose = () => {
    setNoteText('');
    setAddNoteVisible(false);
  };

  const onSaveNote = () => {
    dispatch.bookingStore.setCreateBookingWizard({
      ...createBookingWizard,
      notes: noteText,
    });
    handleOnClose();
  };

  const handleNextStep = async () => {
    setIsLoading(true);
    try {
      await dispatch.serviceStore.doGetServiceList({
        distance: createBookingWizard?.routeInfo?.travelDistance,
      });
      nextStep();
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error!',
        textBody: 'Oops, something went wrong! Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
      {createBookingWizard && createBookingWizard.routeInfo && (
        <View
          style={[
            styles.jus_between,
            styles.mv_x2_small,
            styles.mt_small,
            styles.flex_row,
            {
              flexWrap: 'wrap',
            },
          ]}>
          <Item
            label="Distance"
            value={round(createBookingWizard?.routeInfo?.travelDistance, 2)}
            unit="km"
            iconName="road"
          />
          <Item
            label="Duration"
            value={round(
              createBookingWizard?.routeInfo?.travelDuration / 60,
              1,
            )}
            unit="minute"
            iconName="hourglass-half"
          />
          <Item
            label="Duration Traffic"
            value={round(
              createBookingWizard?.routeInfo?.travelDurationTraffic / 60,
              1,
            )}
            unit="minute"
            iconName="clock-o"
          />
        </View>
      )}

      <View style={[styles.mv_12, styles.flex_row, styles.alg_center]}>
        <Icon
          name="pencil"
          size={IconSizes.x2_small}
          style={[styles.mh_small]}
        />
        <LinkButton onPress={() => setAddNoteVisible(true)} type="footnote">
          Additional notes about the pick up point for the driver
        </LinkButton>
      </View>

      <PrimaryButton
        loading={isLoading}
        color={Colors.Green}
        onPress={handleNextStep}>
        Choose this pick up point
      </PrimaryButton>

      <BottomSheetModal
        hasDivider
        isVisible={addNoteVisible}
        title="Add notes"
        description="Additional notes about the pick up point for the driver"
        onClose={handleOnClose}>
        <InputText
          style={[styles.mv_small]}
          value={noteText || createBookingWizard?.notes}
          onChange={setNoteText}
          placeholder="Type note"
        />
        <PrimaryButton
          disable={!noteText}
          color={Colors.Green}
          onPress={onSaveNote}>
          Confirm
        </PrimaryButton>
      </BottomSheetModal>
    </>
  );
};

export default PickUpLocationSection;
