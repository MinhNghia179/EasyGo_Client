import React from 'react';
import { Image, View } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { HomeStackRoute } from '../../../constants/constant';
import navigationService from '../../../navigation/navigation-service';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import IconSizes from '../../../styles/icon-size';

interface IProps {}

const CompleteBooking = (props: IProps) => {
  return (
    <>
      <View style={[styles.flex_row, styles.alg_center, styles.jus_between]}>
        <Image
          style={[
            {
              width: wp(80),
              height: wp(80),
            },
          ]}
          source={require('../../../assets/image/complete_booking.gif')}
        />

        <View
          style={[
            {
              flexShrink: 1,
            },
          ]}>
          <View style={[styles.flex_row]}>
            <Icon
              name="checkmark-circle-outline"
              color={Colors.Green400}
              size={IconSizes.x_small}
            />

            <Text type="footnote" color={Colors.Black}>
              The ride has been completed. Thanks for using Easy Go
            </Text>
          </View>
          <PrimaryButton
            style={[styles.mt_small]}
            onPress={() => {
              navigationService.navigate(HomeStackRoute.DASHBOARD, {});
            }}>
            Go to home
          </PrimaryButton>
        </View>
      </View>
    </>
  );
};

export default CompleteBooking;
