import React, { useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-root-toast';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import { BookingGuidStep } from '../utils/constant';

interface IProps {
  nextStep: (value: string) => void;
  prevStep: () => void;
}

const PaymentMethodSection = (props: IProps) => {
  const { nextStep, prevStep } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onConfirm = () => {
    setIsLoading(true);
    try {
      nextStep(BookingGuidStep.SEARCHING_RIDE);
      setTimeout(() => {
        nextStep(BookingGuidStep.DRIVER_INFO);
      }, 3000);
    } catch (error) {
      Toast.show(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Text>PaymentMethodSection</Text>
      <View
        style={[
          styles.flex_row,
          styles.p_small,
          styles.rounded_small,
          styles.b_small,
          {
            borderColor: Colors.Blue600,
          },
        ]}>
        <PrimaryButton
          onPress={prevStep}
          color={Colors.Red500}
          style={[styles.flex_1]}>
          Prev Step
        </PrimaryButton>
        <View style={[styles.mh_x2_small]}></View>
        <PrimaryButton
          loading={isLoading}
          style={[styles.flex_1]}
          color={Colors.Green}
          onPress={onConfirm}>
          Booking Now
        </PrimaryButton>
      </View>
    </>
  );
};

export default PaymentMethodSection;
