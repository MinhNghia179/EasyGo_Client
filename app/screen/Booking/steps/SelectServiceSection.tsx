import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
interface IProps {}

const SelectServiceSection = (props: IProps) => {
  const {} = props;

  return (
    <View>
      <Text textAlign="center">Suggested Car</Text>
      <TouchableOpacity
        onPress={() => {}}
        style={[
          styles.p_small,
          styles.flex_row,
          styles.alg_center,
          styles.jus_between,
          styles.bb_small,
          styles.mv_x2_small,
          {
            borderBottomColor: Colors.Grey200,
          },
        ]}>
        <View>
          <Text color={Colors.Text.Primary} type="subhead">
            GrabCar
          </Text>
          <Text color={Colors.Text.GreySecondary} type="caption2">
            Tối đa 4 hành khách
          </Text>
        </View>
        <Text fontWeight="bold" type="callout">
          52.000đ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectServiceSection;
