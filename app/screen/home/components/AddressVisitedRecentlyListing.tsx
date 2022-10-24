import { map } from 'lodash';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IAddress } from '../../../interfaces/home-interfaces';
import { IRootState } from '../../../redux/root-store';

import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import { Text } from '../../../components/Text';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  onSelectAddress?: (value: IAddress) => void;
}

const AddressVisitedRecentlyListing: React.FC<IProps> = ({
  onSelectAddress,
}) => {
  const AddressVisitedRecently = useSelector(
    (state: IRootState) => state.homeStore.AddressVisitedRecently,
  );

  return (
    <View style={[styles.p_medium]}>
      {map(AddressVisitedRecently, one => {
        return (
          <TouchableOpacity onPress={() => onSelectAddress(one)}>
            <View
              style={[
                styles.flex_row,
                styles.alg_center,
                styles.jus_between,
                styles.pv_medium,
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
                    {one.shortAddress}
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
