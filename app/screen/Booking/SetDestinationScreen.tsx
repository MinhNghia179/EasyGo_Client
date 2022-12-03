import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { IRootDispatch } from '../../redux/root-store';
import styles from '../../styles/style-sheet';

interface IProps {}

const CreateBookingGuidPanel = () => {
  const dispatch = useDispatch<IRootDispatch>();

  const [step, setStep] = useState<string>('');

  return (
    <SafeAreaContainer
      contentType="scrollview"
      headerBordered
      leftIconName="back"
      title={
        <View style={[styles.flex_row, styles.alg_center]}>
          <Text type="footnote" fontWeight="bold">
            Set Destination
          </Text>
        </View>
      }></SafeAreaContainer>
  );
};

export default CreateBookingGuidPanel;
