import { map } from 'lodash';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import { Text } from '../../../components/Text';
import { IAddress } from '../../../interfaces/home-interfaces';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  onSelectAddress?: (value: IAddress) => void;
  addressList?: IAddress[];
}

const AddressVisitedRecentlyListing: React.FC<IProps> = ({
  onSelectAddress,
  addressList,
}) => {
  return (
    <View style={[styles.mv_small]}>
      <Text fontWeight="bold" type="subhead">
        Locations
      </Text>
      {map(addressList, (one, index) => {
        return (
          <TouchableOpacity key={index}>
            <View
              style={[
                styles.flex_row,
                styles.alg_center,
                styles.jus_between,
                styles.pv_small,
              ]}>
              <View style={[styles.flex_row, styles.alg_center]}>
                <View
                  style={[
                    styles.rounded_full,
                    styles.flex_row,
                    styles.jus_center,
                    styles.alg_center,
                    {
                      width: wp(20),
                      height: wp(20),
                      backgroundColor: Colors.Green500,
                    },
                  ]}>
                  <Icon
                    name="location-pin"
                    size={IconSizes.x2_small}
                    color={Colors.White}
                  />
                </View>

                <View style={[styles.flex_col, styles.ml_small]}>
                  <Text fontWeight="bold" type="subhead">
                    {one?.fullAddress.slice(0, 22)}...
                  </Text>
                  <Text type="footnote" numberOfLines={1}>
                    {one.fullAddress}
                  </Text>
                </View>
              </View>

              <Icon name="arrow-long-right" size={IconSizes.x2_small} />
            </View>
            <Divider />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AddressVisitedRecentlyListing;
