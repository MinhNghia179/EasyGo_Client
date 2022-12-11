import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { BookingStackRoute } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { IRootState } from '../../redux/root-store';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import AddressVisitedRecentlyListing from './components/AddressVisitedRecentlyListing';
import HeaderDetailsSection from './components/HeaderDetailsSection';
interface IProps {}

const HomeDetailScreen = (props: IProps) => {
  const {} = props;

  const [address, setAddress] = useState<string>('');
  const { AddressVisitedRecently } = useSelector(
    (state: IRootState) => state.homeStore,
  );

  const navigateToBookingScreen = () => {
    navigationService.navigate(BookingStackRoute.CREATE_BOOKING_GUID, {});
  };

  return (
    <SafeAreaContainer contentType="scrollView" backgroundColor={Colors.White}>
      <HeaderDetailsSection onPressShowMap={() => {}} />
      <View style={[styles.p_medium]}>
        <TouchableOpacity
          style={[
            styles.b_small,
            styles.rounded,
            styles.p_small,
            styles.flex_row,
            styles.alg_center,
            {
              borderColor: Colors.Grey300,
            },
          ]}
          onPress={navigateToBookingScreen}>
          <View
            style={[
              {
                width: wp(20),
                height: wp(20),
              },
            ]}>
            <Icon
              name="location-pin"
              size={IconSizes.x_small}
              color={Colors.Red300}
            />
          </View>
          <Text type="footnote">Where you want to go?</Text>
        </TouchableOpacity>

        <AddressVisitedRecentlyListing addressList={AddressVisitedRecently} />

        <Text fontWeight="bold" type="subhead">
          Add more ways to move
        </Text>

        <TouchableOpacity
          style={[
            styles.p_medium,
            styles.rounded,
            styles.mt_medium,
            styles.mb_medium,
            {
              backgroundColor: Colors.Green100,
            },
          ]}>
          <Text type="footnote">Car rental by the hour</Text>
        </TouchableOpacity>

        <View style={[styles.flex_row, styles.jus_between, styles.alg_center]}>
          <Text fontWeight="bold" type="subhead">
            Move to favorite places
          </Text>
          <Icon
            name="chevron-with-circle-right"
            color={Colors.Black}
            size={IconSizes.x_small}
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default HomeDetailScreen;
