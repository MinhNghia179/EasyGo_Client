import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useDispatch } from 'react-redux';
import BingMap from '../../components/Map/Map';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { IRootDispatch } from '../../redux/root-store';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import BookingInfo from './steps/BookingInfo';
import DriverInfo from './steps/DriverInfo';
import SearchingRide from './steps/SearchingRide';
import SelectServiceSection from './steps/SelectServiceSection';

interface IProps {}

const CreateBookingGuidPanel = () => {
  const dispatch = useDispatch<IRootDispatch>();

  const [step, setStep] = useState<string>('');

  return (
    <SafeAreaContainer
      contentType="scrollview"
      headerBordered
      leftIconName="back"
      stickyBottom={<DriverInfo />}
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
      <BingMap />
    </SafeAreaContainer>
  );
};

export default CreateBookingGuidPanel;
