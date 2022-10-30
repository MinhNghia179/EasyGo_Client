import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import LinkButton from '../../../components/Button/LinkButton';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { Route } from '../../../constants/constant';
import {
  IBooking,
  ILocation,
  IService,
} from '../../../interfaces/home-interfaces';
import navigationService from '../../../navigation/navigation-service';
import { IRootDispatch } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';
import AddressDetailsSection from '../components/AddressDetailsSection';

interface IProps {
  currentLocation?: ILocation;
  destination?: ILocation;
  services?: IService;
  booking?: IBooking;
  onClose?: () => void;
  onVisibleModal?: () => void;
}

const PaymentDetails = (props: IProps) => {
  const {
    currentLocation,
    destination,
    onVisibleModal,
    services,
    booking,
    onClose,
  } = props;

  const dispatch = useDispatch<IRootDispatch>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleBooking = async () => {
    setIsLoading(true);
    try {
      await dispatch.homeStore.doCreateBooking({});
      Toast.show('Booking created successfully!');
      navigationService.navigate(Route.HOME_DETAIL_SCREEN, {});
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Text fontWeight="bold" type="subhead">
        Booking Info
      </Text>
      <View style={[styles.mt_small]}>
        <View style={[styles.mv_small]}>
          <Text fontWeight="bold">From</Text>
          <AddressDetailsSection location={currentLocation} />
          <Text fontWeight="bold">To</Text>
          <AddressDetailsSection location={destination} />
          <View style={[styles.flex_row, styles.jus_end]}>
            <LinkButton onPress={onVisibleModal}>Change location</LinkButton>
          </View>
        </View>
        <Divider />
        <View>
          <Text fontWeight="bold" type="subhead">
            Service
          </Text>
          <View
            style={[
              styles.mv_small,
              styles.p_medium,
              styles.flex_row,
              styles.jus_between,
              styles.rounded_small,
            ]}>
            <View style={[styles.flex_row, styles.alg_center]}>
              <Icon
                style={[styles.mr_small]}
                name="attachment"
                size={IconSizes.x_small}
                color={Colors.Red300}
              />
              <Text fontWeight="bold" type="subhead">
                {services?.name}
              </Text>
            </View>
            <Text fontWeight="bold" type="footnote">
              {services?.price} vnđ
            </Text>
          </View>
        </View>
        <Divider />
        <View style={[styles.flex_col, styles.alg_end, styles.mt_small]}>
          <Text fontWeight="bold">Distance: {booking?.travelDistance} (m)</Text>
          <Text fontWeight="bold">Total: {booking?.calPrice} (vnđ)</Text>
        </View>
        <Text fontWeight="bold" type="subhead">
          Payment (No card at the moment)
        </Text>

        <PrimaryButton
          style={[styles.mt_medium]}
          color={Colors.Yellow300}
          onPress={onClose}>
          Back
        </PrimaryButton>
        <PrimaryButton
          style={[styles.mt_medium]}
          loading={isLoading}
          disable={isLoading}
          color={Colors.Green500}
          onPress={handleBooking}>
          Booking
        </PrimaryButton>
      </View>
    </>
  );
};

export default PaymentDetails;
