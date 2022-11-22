import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

const OtherMethodSection = () => {
  return (
    <View style={[styles.p_medium]}>
      <Text fontWeight="bold" type="headline">
        Add more ways to move
      </Text>

      <TouchableOpacity
        onPress={() => {}}
        style={[
          styles.p_medium,
          styles.rounded,
          styles.mt_medium,
          styles.mb_medium,
          {
            backgroundColor: Colors.Green100,
          },
        ]}>
        <Text type="footnote">Car rental by the hour</Text>
      </TouchableOpacity>

      <View style={[styles.flex_row, styles.jus_between, styles.alg_center]}>
        <Text fontWeight="bold" type="headline">
          Move to favorite places
        </Text>
        <Icon
          name="chevron-with-circle-right"
          color={Colors.Black}
          size={IconSizes.x_small}
        />
      </View>
    </View>
  );
};

export default OtherMethodSection;
