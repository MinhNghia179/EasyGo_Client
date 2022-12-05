import React, { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useDispatch } from 'react-redux';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { IRootDispatch } from '../../redux/root-store';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
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
          <Icon
            name="location"
            size={IconSizes.x_small}
            color={Colors.Green600}
          />
          <View>
            <Text type="footnote" fontWeight="bold">
              68 Quan Hoa, Cầu Giấy, Hà Nội,...
            </Text>
          </View>
        </View>
      }>
      <MapView style={[styles.flex_1]} />
    </SafeAreaContainer>
  );
};

export default CreateBookingGuidPanel;
