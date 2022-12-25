import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { Avatar } from '../../../components/Avatar';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { HomeStackRoute } from '../../../constants/constant';
import navigationService from '../../../navigation/navigation-service';
import { IRootDispatch } from '../../../redux/root-store';
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

const DriverInfo = (props: IProps) => {
  const {} = props;
  const dispatch = useDispatch<IRootDispatch>();

  const [cancelBookingModalVisible, setCancelBookingModalVisible] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCancelBooking = async () => {
    setIsLoading(true);
    try {
      await dispatch.bookingStore.doCancelBooking({ idBooking: '' });
      dispatch.bookingStore.setCreateBookingWizard(null);
      dispatch.bookingStore.setBookingDetails(null);
      navigationService.navigate(HomeStackRoute.DASHBOARD, {});
    } catch (error) {
      Toast.show(error);
    } finally {
      setIsLoading(false);
    }
  };

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
              Vindel Huskel
            </Text>
            <Text color={Colors.Text.GreySecondary} type="caption2">
              Ride complete: 250 +
            </Text>
          </View>
        </View>
        <View>
          <Text color={Colors.Green600} fontWeight="bold" type="subhead">
            (4.8)
          </Text>
          <Text color={Colors.Text.GreySecondary} type="caption2">
            Rating
          </Text>
        </View>
      </View>
      <View style={[styles.flex_row, styles.jus_between, styles.alg_center]}>
        <View>
          <Text type="caption1" color={Colors.Text.GreySecondary}>
            Yamaha Sirius
          </Text>
          <Text type="footnote" color={Colors.Black}>
            (JDG-4565998)
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
      <PrimaryButton
        style={[styles.mt_medium]}
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

export default DriverInfo;
