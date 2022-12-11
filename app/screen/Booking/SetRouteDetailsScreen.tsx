import React from 'react';
import { View } from 'react-native';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import styles from '../../styles/style-sheet';

interface IProps {}

const SetRouteDetailsScreen: React.FC<IProps> = () => {
  return (
    <SafeAreaContainer
      contentType="scrollView"
      headerBordered
      leftIconName="back"
      title={
        <View style={[styles.flex_row, styles.alg_center]}>
          <Text type="footnote" fontWeight="bold">
            Set Destination
          </Text>
        </View>
      }>
      <View style={[styles.p_medium]}>
        <Text>Set Destination</Text>
      </View>
    </SafeAreaContainer>
  );
};

export default SetRouteDetailsScreen;
