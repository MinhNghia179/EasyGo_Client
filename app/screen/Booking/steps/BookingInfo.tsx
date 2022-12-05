import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {}

const BookingInfo = (props: IProps) => {
  const {} = props;

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
        <Text type="subhead" fontWeight="bold">
          Mirpur 1, Dhaka
        </Text>
      </View>
      <View style={[styles.flex_row, styles.alg_center]}>
        <Icon
          name="location-on"
          color={Colors.Green300}
          size={IconSizes.x2_small}
          style={[styles.mr_small]}
        />
        <Text type="subhead" fontWeight="bold">
          Science Lab Bus Station
        </Text>
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
      <PrimaryButton color={Colors.Green600}>Send Pickup Request</PrimaryButton>
    </>
  );
};

export default BookingInfo;
