import React, { useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { IRootState } from '../../../redux/root-store';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';
import { BookingGuidStep } from '../utils/constant';

interface IProps {
  nextStep: (value: string) => void;
  prevStep: () => void;
}

const BookingInfo = (props: IProps) => {
  const { nextStep, prevStep } = props;

  const { createBookingWizard } = useSelector((state: IRootState) => ({
    createBookingWizard: state.bookingStore.createBookingWizard,
  }));

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onConfirm = () => {
    setIsLoading(true);
    try {
      nextStep(BookingGuidStep.SEARCHING_RIDE);
      setTimeout(() => {
        nextStep(BookingGuidStep.DRIVER_INFO);
      }, 3000);
    } catch (error) {
      Toast.show(error);
    } finally {
      setIsLoading(false);
    }
  };

  const _renderItem = (label, value) => {
    return (
      <View
        style={[
          styles.mv_small,
          {
            width: wp(200),
          },
        ]}>
        <Text type="subhead" color={Colors.Text.GreySecondary}>
          {label}
        </Text>
        <Text type="footnote" fontWeight="bold" color={Colors.Text.DarkBlue}>
          {value}
        </Text>
      </View>
    );
  };

  return (
    <>
      <View style={[styles.flex_row, styles.alg_center]}>
        <Icon
          name="my-location"
          color={Colors.Red300}
          size={IconSizes.x2_small}
          style={[styles.mr_small]}
        />
        <Text type="footnote">{createBookingWizard?.pickUp?.fullAddress}</Text>
      </View>
      <View style={[styles.flex_row, styles.alg_center]}>
        <Icon
          name="location-on"
          color={Colors.Green300}
          size={IconSizes.x2_small}
          style={[styles.mr_small]}
        />
        <Text type="footnote">{createBookingWizard?.dropOff?.fullAddress}</Text>
      </View>
      <View style={[styles.flex_row]}>
        {_renderItem('Estimated Time', '1hr 10min')}
        {_renderItem('Total Destination', '34km')}
      </View>
      <View style={[styles.flex_row]}>
        {_renderItem('Fare Estimate', '$ 125.25')}
        {_renderItem('Travel Costs', '$ 125.25')}
      </View>
      {_renderItem('Service', 'GrabCar')}
      <View style={[styles.mv_medium]}>
        <Text fontWeight="bold" type="footnote">
          Payment (No card at the moment)
        </Text>
      </View>
      <View
        style={[
          styles.flex_row,
          styles.p_small,
          styles.rounded_small,
          styles.b_small,
          {
            borderColor: Colors.Blue600,
          },
        ]}>
        <PrimaryButton
          onPress={prevStep}
          color={Colors.Red500}
          style={[styles.flex_1]}>
          Prev Step
        </PrimaryButton>
        <View style={[styles.mh_x2_small]}></View>
        <PrimaryButton
          loading={isLoading}
          style={[styles.flex_1]}
          color={Colors.Green}
          onPress={onConfirm}>
          Booking Now
        </PrimaryButton>
      </View>
    </>
  );
};

export default BookingInfo;
