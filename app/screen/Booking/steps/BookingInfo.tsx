import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '../../../components/Avatar';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { PointLocationIcon } from '../../../components/common';
import { Text } from '../../../components/Text';
import { HomeStackRoute } from '../../../constants/constant';
import navigationService from '../../../navigation/navigation-service';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';
import { numberWithCommas } from '../../../utils/constant';
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
        styles.p_x_small,
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

  const { createBookingWizard, bookingInfo, driverInfo } = useSelector(
    (state: IRootState) => ({
      createBookingWizard: state.bookingStore.createBookingWizard,
      bookingInfo: state.bookingStore.bookingInfo,
      driverInfo: state.bookingStore.driverInfo,
    }),
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cancelBookingModalVisible, setCancelBookingModalVisible] =
    useState<boolean>(false);

  const handleCancelBooking = async (reason: string) => {
    setIsLoading(true);
    try {
      await dispatch.bookingStore.doCancelBooking({
        bookingId: bookingInfo?.id,
        driverId: driverInfo?.id,
        reason,
      });
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Thành công!',
        textBody: 'Bạn đã hủy cuốc xe thành công!',
      });
      navigationService.navigate(HomeStackRoute.DASHBOARD, {});
      dispatch.bookingStore.setClearState();
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Text color={Colors.Black} type="footnote" fontWeight="bold">
        Đã tìm thấy tài xế cho bạn, sẽ đến sau 01:00 phút
      </Text>
      <View
        style={[
          styles.mt_medium,
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
              {driverInfo?.username}
            </Text>
            <Text color={Colors.Text.GreySecondary} type="caption1">
              Cuốc xe đã hoàn thành:{' '}
              <Text color={Colors.Green600} fontWeight="bold">
                {driverInfo?.rideComplete}
              </Text>{' '}
              +
            </Text>
          </View>
        </View>
        <View style={[styles.flex_row, styles.alg_center, styles.jus_center]}>
          <Text color={Colors.Text.GreySecondary} type="caption2">
            Đánh giá: &nbsp;
          </Text>
          <Text color={Colors.Green600} fontWeight="bold">
            ({driverInfo?.rating})
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.flex_row,
          styles.jus_between,
          styles.alg_center,
          styles.mv_small,
        ]}>
        <View>
          <Text type="caption1">
            Số điện thoại: <Text fontWeight="bold">{driverInfo?.phone}</Text>
          </Text>
          <Text type="caption1">
            Biển số xe đăng kí: &nbsp;
            <Text fontWeight="bold">
              {driverInfo?.typeTransport} ({driverInfo?.licensePlate})
            </Text>
          </Text>
        </View>
      </View>

      <View style={[styles.mv_x_small, styles.shadowCard]}>
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

      <View style={[styles.flex_row, styles.alg_center, styles.jus_end]}>
        <Item
          label="Gọi điện"
          onPress={() => {}}
          icon={
            <Icon name="phone" color={Colors.Black} size={IconSizes.small} />
          }
        />
        <Item
          label="Nhắn tin"
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
            Tổng
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
          {numberWithCommas(createBookingWizard?.totalPrice)} (VNĐ)
        </Text>
      </View>
      <PrimaryButton
        color={Colors.Red300}
        onPress={() => setCancelBookingModalVisible(true)}>
        Hủy cuốc xe
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
