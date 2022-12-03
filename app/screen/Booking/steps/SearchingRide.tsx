import React from 'react';
import { View } from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import LinkButton from '../../../components/Button/LinkButton';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {}

const SearchingRide = (props: IProps) => {
  const {} = props;

  return (
    <>
      <View style={[styles.flex_row, styles.alg_center, styles.jus_between]}>
        <View>
          <Text fontWeight="bold" type="subhead">
            Searching Ride
          </Text>
          <Text type="footnote" color={Colors.Text.GreySecondary}>
            It may take some times...
          </Text>
        </View>
        <LinkButton color={Colors.Red600} type="subhead">
          Cancel
        </LinkButton>
      </View>
      <View style={[styles.mt_small]}>
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item height={10} />
        </SkeletonPlaceholder>
      </View>
    </>
  );
};

export default SearchingRide;
