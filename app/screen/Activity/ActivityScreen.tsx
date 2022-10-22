import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';

interface IProps {}

const ActivityScreen = (props: IProps) => {
  const {} = props;

  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaContainer
      left={
        <Text fontWeight="bold" color={Colors.Text.Primary} type="headline">
          Hoạt động
        </Text>
      }
      right={
        <PrimaryButton
          color={Colors.Cyan100}
          borderRadius={20}
          onPress={() => {}}
          style={[styles.rounded, styles.p_medium]}>
          <View
            style={[
              styles.flex,
              styles.flex_row,
              styles.jus_center,
              styles.alg_center,
            ]}>
            <Icon
              name="history"
              size={IconSizes.x2_small}
              style={[styles.mr_small]}
            />
            <Text color={Colors.Text.Primary} type="footnote" fontWeight="bold">
              Lịch sử
            </Text>
          </View>
        </PrimaryButton>
      }>
      <View
        style={[
          styles.flex,
          styles.flex_col,
          styles.alg_center,
          styles.jus_center,
        ]}>
        <Text type="headline" color={Colors.Text.Primary} fontWeight="bold">
          Hiện vẫn chưa có hoạt động nào
        </Text>
        <View style={[styles.mt_small]}>
          <Text type="footnote">Tìm hiểu xem EasyGo nay có giừ mới nào!</Text>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default ActivityScreen;
