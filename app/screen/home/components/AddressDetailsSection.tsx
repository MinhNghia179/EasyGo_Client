import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

import Icon from 'react-native-vector-icons/Entypo';
import { Text } from '../../../components/Text';
import IconSizes from '../../../styles/icon-size';
import { ILocation } from '../../../interfaces/home-interfaces';

interface IProps {
  currentLocation: ILocation;
  onPress?: () => void;
}

const AddressDetailsSection = (props: IProps) => {
  const { currentLocation, onPress } = props;

  return (
    <View
      style={[
        styles.flex_row,
        styles.alg_center,
        styles.jus_around,
        styles.p_medium,
        styles.rounded_small,
        {
          backgroundColor: Colors.Grey100,
        },
      ]}>
      <View style={[styles.flex_1]}>
        <Icon
          name="location-pin"
          size={IconSizes.small}
          color={Colors.Red200}
        />
      </View>

      <View
        style={[
          styles.flex_col,
          {
            flex: 10,
          },
        ]}>
        <Text type="subhead" numberOfLines={1} fontWeight="bold">
          {currentLocation.fullAddress.slice(0, 25)}
        </Text>
        <Text type="footnote" numberOfLines={1}>
          {currentLocation.fullAddress}
        </Text>
      </View>

      <TouchableOpacity onPress={onPress}>
        <Icon name="bookmark" size={IconSizes.x_small} color={Colors.White} />
      </TouchableOpacity>
    </View>
  );
};

export default AddressDetailsSection;
