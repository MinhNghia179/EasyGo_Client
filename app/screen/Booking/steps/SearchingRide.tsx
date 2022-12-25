import React from 'react';
import { View } from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {
  nextStep: () => void;
}

const SearchingRide = (props: IProps) => {
  const { nextStep } = props;

  return (
    <>
      <View style={[styles.flex_row, styles.alg_center, styles.jus_between]}>
        <View>
          <Text fontWeight="bold" type="subhead">
            Searching Ride
          </Text>
          <Text type="footnote" color={Colors.Text.GreySecondary}>
            Looking for the nearest driver for you. It may take some times...
          </Text>
        </View>
      </View>
      <View style={[styles.mt_small, styles.pv_medium]}>
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item height={10} />
        </SkeletonPlaceholder>
      </View>
      <PrimaryButton color={Colors.Red600}>Cancel</PrimaryButton>
    </>
  );
};

export default SearchingRide;
