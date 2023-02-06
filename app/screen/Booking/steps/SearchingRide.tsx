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
      <Text fontWeight="bold" type="subhead" textAlign="center">
        Đang tìm tài xế ...
      </Text>
      <View style={[styles.flex_row, styles.alg_center, styles.jus_between]}>
        <Image
          style={[
            {
              width: wp(120),
              height: wp(120),
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
          <Text type="footnote" color={Colors.Text.GreySecondary}>
            Hệ thống đang tìm tài xế đang hoạt động và khoảng cách gần bạn nhất.
            Quá trình này có thể mất một hoặc vài phút
          </Text>
        </View>
      </View>
      <View style={[styles.pv_x2_small]}>
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item height={10} />
        </SkeletonPlaceholder>
      </View>
    </>
  );
};

export default SearchingRide;
