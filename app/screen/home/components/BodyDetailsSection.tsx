import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Text } from '../../../components/Text';
import { IAddress } from '../../../interfaces/home-interfaces';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';
import AddressVisitedRecentlyListing from './AddressVisitedRecentlyListing';

interface IProps {
  navigateToBookingScreen: () => void;
  AddressVisitedRecently: IAddress[];
}

const BodyDetailsSection = (props: IProps) => {
  const { navigateToBookingScreen, AddressVisitedRecently } = props;

  return (
    <>
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
          <Text type="footnote">Bạn muốn đi đâu?</Text>
        </TouchableOpacity>

        <AddressVisitedRecentlyListing addressList={AddressVisitedRecently} />

        <Text fontWeight="bold" type="subhead">
          Thêm nhiều cách để di chuyển
        </Text>

        <TouchableOpacity
          style={[
            styles.p_medium,
            styles.rounded,
            styles.mv_small,
            {
              backgroundColor: Colors.Green,
            },
          ]}>
          <Text type="footnote" color={Colors.White}>
            Cho thuê xe theo giờ
          </Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri: 'https://engineering.grab.com/img/seven-facts-about-grab-partner-drivers-in-sg/image1.png',
        }}
        style={[styles.flex_1]}></ImageBackground>
    </>
  );
};

export default BodyDetailsSection;
