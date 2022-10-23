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
        <Text fontWeight="bold" type="headline">
          Activity
        </Text>
      }
      right={
        <PrimaryButton
          color={Colors.Cyan100}
          style={[styles.rounded_full]}
          icon={
            <Icon
              name="history"
              size={IconSizes.x2_small}
              style={[styles.mr_small]}
            />
          }>
          <Text type="footnote" fontWeight="bold">
            History
          </Text>
        </PrimaryButton>
      }>
      <View style={[styles.flex_col, styles.alg_center, styles.jus_center]}>
        <Text type="headline" fontWeight="bold">
          No activity yet
        </Text>
        <View style={[styles.mt_small]}>
          <Text type="footnote">Learn what's new with EasyGo now.</Text>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default ActivityScreen;
