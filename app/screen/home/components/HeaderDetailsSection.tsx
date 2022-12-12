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
    (state: IRootState) => state.authStore,
  );

  return (
    <View
      style={[
        styles.p_medium,
        {
          backgroundColor: Colors.Green,
        },
      ]}>
      <Text type="headline" fontWeight="bold" color={Colors.White}>
        EASY GO
      </Text>
      <View
        style={[
          styles.mv_small,
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
            <Text type="callout" color={Colors.White}>
              Hi, <Text fontWeight="bold">Minh Nghia</Text>.
            </Text>
            <Text color={Colors.White}>Let's discover a new adventure!</Text>
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
      <View style={[styles.flex_row, styles.alg_center, styles.mt_x2_small]}>
        <TouchableOpacity style={[styles.mr_x_small]}>
          <Icon name="my-location" size={IconSizes.x_small} />
        </TouchableOpacity>
        <Text
          color={Colors.White}
          type="caption1"
          fontWeight="bold"
          numberOfLines={1}>
          {currentLocation?.fullAddress || 'Loading...'}
        </Text>
      </View>
      <View style={[styles.flex_row, styles.jus_between, styles.mt_medium]}>
        <View>
          <Text type="subhead" fontWeight="bold" color={Colors.White}>
            Move
          </Text>
          <Text type="subhead" color={Colors.White}>
            We will take you anywhere!
          </Text>
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
    </View>
  );
};

export default HeaderDetailsSection;
