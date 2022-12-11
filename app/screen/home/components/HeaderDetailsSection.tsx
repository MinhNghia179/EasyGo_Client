import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Avatar } from '../../../components/Avatar';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { IRootState } from '../../../redux/root-store';
import { wp } from '../../../services/response-screen-service';
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
    <View style={[styles.p_medium]}>
      <Text type="headline" fontWeight="bold" color={Colors.BlueGrey800}>
        EASY GO
      </Text>
      <View
        style={[
          styles.mv_medium,
          styles.flex_row,
          styles.alg_center,
          styles.jus_between,
        ]}>
        <View style={[styles.flex_row]}>
          <Avatar
            style={[styles.rounded]}
            imageSize={wp(35)}
            source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            position="bottom-left"
          />
          <View style={[styles.ml_small]}>
            <Text type="callout">
              Hi, <Text fontWeight="bold">Minh Nghia</Text>.
            </Text>
            <Text>Let's discover a new adventure!</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon
            name="info-outline"
            size={IconSizes.small}
            color={Colors.Black}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.flex_row, styles.jus_between, styles.mt_small]}>
        <View>
          <Text type="headline" fontWeight="bold">
            Move
          </Text>
          <Text type="subhead">We will take you anywhere!</Text>
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
            <Text type="subhead" fontWeight="bold">
              Show map
            </Text>
          </PrimaryButton>
        </View>
      </View>
      <View style={[styles.flex_row, styles.alg_center, styles.mt_small]}>
        <TouchableOpacity>
          <Icon name="my-location" size={IconSizes.small} />
        </TouchableOpacity>
        <View
          style={[
            styles.rounded_full,
            styles.p_small,
            styles.ml_small,
            {
              backgroundColor: Colors.Grey400,
              flexShrink: 1,
            },
          ]}>
          <Text
            color={Colors.White}
            type="subhead"
            fontWeight="bold"
            numberOfLines={1}>
            68 Ngõ 68 Đường Cầu Giấy, Quan Hoa, Hà Nội,...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderDetailsSection;
