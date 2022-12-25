import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { IRootDispatch, IRootState } from '../../redux/root-store';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import MapViewSection from './components/MapViewSection';
import StickyBottomDetailsPanel from './components/StickyBottomDetailsPanel';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateBookingGuidPanel = (props: IProps) => {
  const { navigation } = props;

  const dispatch = useDispatch<IRootDispatch>();

  const { currentLocation } = useSelector((state: IRootState) => ({
    currentLocation: state.authStore.currentLocation,
  }));

  const goBack = () => {
    dispatch.bookingStore.setCreateBookingWizard(null);
    navigation.goBack();
  };

  return (
    <SafeAreaContainer
      contentType="scrollView"
      leftIconName="back"
      headerBordered
      leftIconOnPress={goBack}
      stickyBottom={<StickyBottomDetailsPanel />}
      title={
        <View style={[styles.flex_row, styles.alg_center]}>
          <Icon
            name="location"
            size={IconSizes.x_small}
            color={Colors.Green600}
          />
          <Text type="caption1" fontWeight="bold">
            {currentLocation?.fullAddress}
          </Text>
        </View>
      }>
      <MapViewSection />
    </SafeAreaContainer>
  );
};

export default CreateBookingGuidPanel;
