import React from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
interface IProps {}

const CancelTripScreen = (props: IProps) => {
  return (
    <SafeAreaContainer
      contentType="scrollview"
      leftIconName="back"
      headerBordered
      title="Cancel Trip">
      <View
        style={[
          styles.p_medium,
          styles.flex_1,
          styles.flex_col,
          styles.jus_between,
        ]}>
        <View>
          <CheckBox title="Waiting for a long time " />
          <CheckBox title="Ride isn't here " />
          <CheckBox title="Wrong address shown " />
          <CheckBox title="Don't charge rider " />
          <CheckBox title="Ride isn't here " />
          <CheckBox title="Don't charge rider " />
          <CheckBox title="Others" />
          <CheckBox title="Ride isn't here" />
        </View>
        <PrimaryButton color={Colors.Green600}>Done</PrimaryButton>
      </View>
    </SafeAreaContainer>
  );
};

export default CancelTripScreen;
