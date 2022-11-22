import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { Route } from '../../../constants/constant';
import navigationService from '../../../navigation/navigation-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

const BookingOverviewHeader = () => {
  const onPressShowMapBooking = () => {
    navigationService.navigate(Route.CURRENT_LOCATION, {});
  };

  return (
    <View
      style={[
        styles.flex_row,
        styles.pv_x_large,
        {
          backgroundColor: Colors.Green200,
        },
      ]}>
      <View style={[styles.p_medium]}>
        <Text type="headline" fontWeight="bold">
          Move
        </Text>
        <Text type="footnote">We will take you anywhere!</Text>
      </View>
      <View style={[styles.p_small]}>
        <PrimaryButton
          color={Colors.Green100}
          onPress={onPressShowMapBooking}
          style={[styles.rounded_full]}
          icon={
            <Icon
              name="map"
              size={IconSizes.x2_small}
              style={[styles.mr_small]}
            />
          }>
          <Text type="footnote" fontWeight="bold">
            Show map
          </Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default BookingOverviewHeader;
