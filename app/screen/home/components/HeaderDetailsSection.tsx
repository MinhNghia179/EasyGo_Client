import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  onPressShowMap: () => void;
}

const HeaderDetailsSection: React.FC<IProps> = ({ onPressShowMap }) => {
  const { currentLocation } = useSelector(
    (state: IRootState) => state.homeStore,
  );

  return (
    <View
      style={[
        styles.p_medium,
        styles.pv_x_large,
        styles.shadow,
        {
          backgroundColor: Colors.Green200,
        },
      ]}>
      <View style={[styles.flex_row, styles.jus_between]}>
        <View>
          <Text type="headline" fontWeight="bold">
            Move
          </Text>
          <Text type="footnote">We will take you anywhere!</Text>
        </View>
        <View style={[styles.p_small]}>
          <PrimaryButton
            color={Colors.Green100}
            onPress={onPressShowMap}
            style={[styles.rounded_full]}
            icon={
              <Icon
                name="map"
                size={IconSizes.x2_small}
                style={[styles.mr_small]}
              />
            }>
            <Text type="footnote" fontWeight="bold">
              Show map
            </Text>
          </PrimaryButton>
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={[
            styles.pv_small,
            styles.rounded_full,
            styles.mt_small,
            styles.p_small,
            styles.flex_row,
            styles.alg_center,
            {
              backgroundColor: Colors.Grey500,
            },
          ]}>
          <Icon
            color={Colors.White}
            name="location-pin"
            size={IconSizes.small}
          />
          <Text color={Colors.White} type="subhead" fontWeight="bold">
            68 Ngõ 68 Đường Cầu Giấy, Quan Hoa,...
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderDetailsSection;
