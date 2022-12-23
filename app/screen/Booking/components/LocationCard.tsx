import { isEmpty } from 'lodash';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text } from '../../../components/Text';
import { IAddress } from '../../../interfaces/home-interfaces';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  label?: string;
  onPress?: () => void;
  address?: IAddress;
}

const LocationCard = (props: IProps) => {
  const { onPress, address, label } = props;
  const isNotLocation = isEmpty(address);

  return (
    <>
      {!!label && (
        <Text type="caption1" fontWeight="bold">
          {label}
        </Text>
      )}
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.p_small,
          styles.rounded_small,
          {
            backgroundColor: Colors.Grey100,
            borderWidth: 1,
            borderColor: isNotLocation ? Colors.Red500 : Colors.Green500,
          },
        ]}>
        {isNotLocation ? (
          <Text color={Colors.Red400} type="footnote">
            Please select drop off location
          </Text>
        ) : (
          <>
            <View style={[styles.flex_row, styles.alg_center]}>
              <Icon
                style={[styles.mh_12]}
                name="search-location"
                size={IconSizes.x_small}
                color={Colors.Blue300}
              />
              <View
                style={[
                  {
                    flexShrink: 1,
                  },
                ]}>
                <Text type="caption1" fontWeight="bold">
                  {address?.shortAddress}
                </Text>
                <Text type="caption1">{address?.fullAddress}</Text>
              </View>
            </View>
          </>
        )}
      </TouchableOpacity>
    </>
  );
};

export default LocationCard;
