import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Avatar } from '../../../components/Avatar';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {}

const DriverInfo = (props: IProps) => {
  return (
    <View style={[styles.p_medium]}>
      <Text color={Colors.Black} type="footnote">
        Nearest driver found, will reach in 01:00 min
      </Text>
      <View
        style={[
          styles.mv_medium,
          styles.flex_row,
          styles.jus_between,
          styles.alg_center,
        ]}>
        <View style={[styles.flex_row]}>
          <Avatar
            style={[styles.rounded_full]}
            imageSize={wp(35)}
            source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            position="bottom-left"
          />
          <View style={[styles.ml_small]}>
            <Text color={Colors.Green600} fontWeight="bold" type="subhead">
              Vindel Huskel
            </Text>
            <Text color={Colors.Text.GreySecondary} type="caption2">
              Ride complete: 250 +
            </Text>
          </View>
        </View>
        <View>
          <Text color={Colors.Green600} fontWeight="bold" type="subhead">
            (4.8)
          </Text>
          <Text color={Colors.Text.GreySecondary} type="caption2">
            Rating
          </Text>
        </View>
      </View>
      <View style={[styles.flex_row, styles.jus_between, styles.alg_center]}>
        <View>
          <Text type="caption1" color={Colors.Text.GreySecondary}>
            Yamaha Sirius
          </Text>
          <Text type="footnote" color={Colors.Black}>
            (JDG-4565998)
          </Text>
        </View>
        <View style={[styles.flex_row]}>
          <Icon
            name="message1"
            style={[styles.mr_medium]}
            color={Colors.Black}
            size={IconSizes.small}
          />
          <Icon name="phone" color={Colors.Black} size={IconSizes.small} />
        </View>
      </View>
      <PrimaryButton style={[styles.mt_medium]} color={Colors.Red300}>
        Cancel Ride
      </PrimaryButton>
    </View>
  );
};

export default DriverInfo;
