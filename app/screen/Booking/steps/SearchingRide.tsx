import React from 'react';
import { Image, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Text } from '../../../components/Text';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {}

const SearchingRide = (props: IProps) => {
  return (
    <>
      <View style={[styles.flex_row, styles.alg_center, styles.jus_between]}>
        <Image
          style={[
            {
              width: wp(150),
              height: wp(150),
            },
          ]}
          source={require('../../../assets/image/icon_driver.gif')}
        />

        <View
          style={[
            {
              flexShrink: 1,
            },
          ]}>
          <Text fontWeight="bold" type="subhead">
            Searching Ride
          </Text>

          <Text type="footnote" color={Colors.Text.GreySecondary}>
            Looking for the nearest driver for you. It may take some times...
          </Text>
        </View>
      </View>
      <View style={[styles.pv_small]}>
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item height={10} />
        </SkeletonPlaceholder>
      </View>
    </>
  );
};

export default SearchingRide;
