import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';

interface IProps {}

const RateDriverScreen = (props: IProps) => {
  return (
    <SafeAreaContainer
      contentType="scrollView"
      leftIconName="back"
      headerBordered
      title="Rate Driver">
      <View
        style={[
          styles.p_medium,
          styles.flex_1,
          {
            backgroundColor: Colors.BlueGrey100,
          },
        ]}>
        <View style={[styles.flex_col, styles.alg_center]}>
          <Icon
            name="checkcircle"
            size={IconSizes.medium}
            color={Colors.Green400}
          />
          <Text fontWeight="bold">Thank you!</Text>
          <Text>You successfully complete payment</Text>
        </View>
        <View
          style={[
            styles.flex_col,
            styles.alg_center,
            {
              backgroundColor: Colors.White,
            },
          ]}></View>
      </View>
    </SafeAreaContainer>
  );
};

export default RateDriverScreen;
