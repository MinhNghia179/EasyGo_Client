import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../../components/Button/LinkButton';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { ActionModal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { BookingStackRoute } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { IRootDispatch, IRootState } from '../../redux/root-store';
import {
  currentPosition,
  requestLocationPermission,
} from '../../services/geolocation-service';
import { getCurrentLocationByCoordinates } from '../../services/google-map-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import BodyDetailsSection from './components/BodyDetailsSection';
import HeaderDetailsSection from './components/HeaderDetailsSection';

interface IProps {}

const HomeDetailScreen = (props: IProps) => {
  const {} = props;

  const dispatch = useDispatch<IRootDispatch>();

  const { currentLocation, AddressVisitedRecently, createBookingWizard } =
    useSelector((state: IRootState) => ({
      currentLocation: state.authStore.currentLocation,
      AddressVisitedRecently: state.homeStore.AddressVisitedRecently,
      createBookingWizard: state.bookingStore.createBookingWizard,
    }));

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigateToBookingScreen = () => {
    dispatch.bookingStore.setCreateBookingWizard({
      ...createBookingWizard,
      pickUp: currentLocation,
    });
    navigationService.navigate(BookingStackRoute.CREATE_BOOKING_GUID, {});
  };

  const allowToEnableLocation = async () => {
    setIsLoading(true);
    try {
      const isGranted = await requestLocationPermission();
      if (isGranted) {
        const response = await currentPosition();
        if (response) {
          const address = await getCurrentLocationByCoordinates(response);
          dispatch.authStore.setCurrentLocation(address);
        }
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error!',
        textBody: 'Oops, something went wrong! Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const suggestMoreLocation = async () => {
    setIsLoading(true);
    try {
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error!',
        textBody: 'Oops, something went wrong! Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const doNotAllow = () => {};

  useEffect(() => {
    if (currentLocation) {
      suggestMoreLocation();
    }
  }, [currentLocation]);

  return (
    <SafeAreaContainer contentType="scrollView" backgroundColor={Colors.White}>
      <HeaderDetailsSection onPressShowMap={() => {}} />
      <BodyDetailsSection
        navigateToBookingScreen={navigateToBookingScreen}
        AddressVisitedRecently={AddressVisitedRecently}
      />
      <ActionModal isVisible={!currentLocation} title="Enable your location">
        <Text type="footnote">
          This app requires that location services are turned on your device and
          for this app. You must enable them in Settings before using this app
        </Text>
        <View style={[styles.flex_col, styles.alg_center, styles.jus_between]}>
          <PrimaryButton
            disabled={isLoading}
            style={[styles.mv_medium]}
            onPress={allowToEnableLocation}>
            Allow only while using the app
          </PrimaryButton>
          <LinkButton onPress={doNotAllow}>Don't allow this app</LinkButton>
        </View>
      </ActionModal>
    </SafeAreaContainer>
  );
};

export default HomeDetailScreen;
