import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

import { isEmpty } from 'lodash';
import Icon from 'react-native-vector-icons/Entypo';
import { Text } from '../../../components/Text';
import { ILocation } from '../../../interfaces/home-interfaces';
import IconSizes from '../../../styles/icon-size';

interface IProps {
  location: ILocation;
  onPress?: () => void;
}

const AddressDetailsSection = (props: IProps) => {
  const { location, onPress } = props;

  const isNotLocation = isEmpty(location);

  return (
    <TouchableOpacity
      style={[
        styles.flex_row,
        styles.alg_center,
        styles.jus_around,
        styles.p_medium,
        styles.rounded_small,
        {
          backgroundColor: Colors.Grey100,
          borderWidth: 1,
          borderColor: isNotLocation ? Colors.Red500 : Colors.Green500,
        },
      ]}
      onPress={onPress}>
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
        {isNotLocation ? (
          <Text color={Colors.Red400}>Please select a destination</Text>
        ) : (
          <>
            <Text type="subhead" numberOfLines={1} fontWeight="bold">
              {location?.fullAddress?.slice(0, 22)}...
            </Text>
            <Text type="caption1" numberOfLines={2}>
              {location?.fullAddress}
            </Text>
          </>
        )}
      </View>

      <TouchableOpacity onPress={onPress}>
        <Icon name="bookmark" size={IconSizes.x_small} color={Colors.White} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default AddressDetailsSection;
