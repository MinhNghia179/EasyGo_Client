import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '../../../components/Avatar';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { PointLocationIcon } from '../../../components/common';
import { Text } from '../../../components/Text';
import { HomeStackRoute, SocketEvent } from '../../../constants/constant';
import { ICoordinates } from '../../../interfaces/home-interfaces';
import navigationService from '../../../navigation/navigation-service';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';
import CancelBookingModal from '../components/CancelBookingModal';

interface IProps {}

interface IItemProps {
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const Item = ({ label, icon, onPress }: IItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.flex_row,
        styles.alg_center,
        styles.mh_x_small,
        styles.p_small,
        styles.rounded_small,
        styles.b_small,
        {
          borderColor: Colors.Green,
        },
      ]}>
      <Text>{label}</Text>
      <View style={[styles.ph_x2_small]}>{icon}</View>
    </TouchableOpacity>
  );
};

const BookingInfo = (props: IProps) => {
  const {} = props;

  const dispatch = useDispatch<IRootDispatch>();

  const { createBookingWizard, socket, trackBooking } = useSelector(
    (state: IRootState) => ({
      createBookingWizard: state.bookingStore.createBookingWizard,
      socket: state.authStore.socket,
      trackBooking: state.bookingStore.trackBooking,
    }),
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cancelBookingModalVisible, setCancelBookingModalVisible] =
    useState<boolean>(false);

  const handleCancelBooking = async () => {
    setIsLoading(true);
    try {
      await dispatch.bookingStore.doCancelBooking({ idBooking: '' });
      dispatch.bookingStore.setClearState();
      navigationService.navigate(HomeStackRoute.DASHBOARD, {});
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

  const handleTrackLocationOfDriver = (data: ICoordinates) => {
    dispatch.bookingStore.setTrackBooking({
      ...trackBooking,
      driverPosition: data,
    });
  };

  useEffect(() => {
    socket?.on(SocketEvent.TRACK, data => handleTrackLocationOfDriver(data));
  }, [socket]);

  return (
    <>
      <Text color={Colors.Black} type="footnote" fontWeight="bold">
        Nearest driver found, will reach in 01:00 min
      </Text>
      <View
        style={[
          styles.mv_medium,
          styles.flex_row,
          styles.jus_between,
          styles.alg_center,
        ]}>
        <View style={[styles.flex_row]}>
          <Avatar
            style={[styles.rounded_full]}
            imageSize={wp(35)}
            source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            position="bottom-left"
          />
          <View style={[styles.ml_small]}>
            <Text color={Colors.Green600} fontWeight="bold" type="subhead">
              {trackBooking?.bookingInfo?.username}
            </Text>
            <Text color={Colors.Text.GreySecondary} type="caption2">
              Ride complete: {trackBooking?.bookingInfo?.rideComplete} +
            </Text>
          </View>
        </View>
        <View>
          <Text color={Colors.Green600} fontWeight="bold" type="subhead">
            ({trackBooking?.bookingInfo?.rating})
          </Text>
          <Text color={Colors.Text.GreySecondary} type="caption2">
            Rating
          </Text>
        </View>
      </View>
      <View style={[styles.flex_row, styles.jus_between, styles.alg_center]}>
        <View>
          <Text type="caption1" color={Colors.Text.GreySecondary}>
            {trackBooking?.bookingInfo?.typeTransport}
          </Text>
          <Text type="footnote" color={Colors.Black}>
            ({trackBooking?.bookingInfo?.licensePlate})
          </Text>
        </View>
        <View style={[styles.flex_row]}>
          <Item
            label="Call Now"
            onPress={() => {}}
            icon={
              <Icon name="phone" color={Colors.Black} size={IconSizes.small} />
            }
          />
          <Item
            label="Message"
            onPress={() => {}}
            icon={
              <Icon
                name="message1"
                style={[styles.mr_medium]}
                color={Colors.Black}
                size={IconSizes.small}
              />
            }
          />
        </View>
      </View>
      <View style={[styles.mv_small, styles.shadowCard]}>
        <View style={[styles.flex_row]}>
          <PointLocationIcon size="medium" style={[styles.mh_small]} />
          <Text type="caption1" fontWeight="bold">
            {createBookingWizard?.pickUp?.fullAddress}
          </Text>
        </View>
        <View style={[styles.mv_x_small]} />
        <View style={[styles.flex_row]}>
          <PointLocationIcon
            size="medium"
            style={[styles.mh_small]}
            color={Colors.Red300}
          />
          <Text type="caption1" fontWeight="bold">
            {createBookingWizard?.dropOff?.fullAddress}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.flex_row,
          styles.jus_around,
          styles.alg_center,
          styles.mv_small,
          styles.p_12,
          styles.shadowCard,
        ]}>
        <View style={[styles.flex_row, styles.alg_center]}>
          <Text fontWeight="bold" type="callout" color={Colors.Text.Primary}>
            Cash
          </Text>
          <Icon
            style={[styles.mh_small]}
            name="circledown"
            size={IconSizes.x_small}
            color={Colors.Green400}
          />
        </View>
        <Divider width={1} orientation="vertical" color={Colors.Black} />
        <Text fontWeight="bold" type="callout" color={Colors.Text.Primary}>
          {createBookingWizard?.totalPrice}
        </Text>
      </View>
      <PrimaryButton
        color={Colors.Red300}
        onPress={() => setCancelBookingModalVisible(true)}>
        Cancel Ride
      </PrimaryButton>

      <CancelBookingModal
        isLoading={isLoading}
        visible={cancelBookingModalVisible}
        onClose={() => setCancelBookingModalVisible(false)}
        onCancelBooking={handleCancelBooking}
      />
    </>
  );
};

export default BookingInfo;
