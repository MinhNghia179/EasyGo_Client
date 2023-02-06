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
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
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
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const doNotAllow = () => {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Error!',
      textBody: 'Oops, something went wrong! Please try again.',
    });
  };

  useEffect(() => {
    if (currentLocation) {
      suggestMoreLocation();
    }
  }, [currentLocation]);

  return (
    <SafeAreaContainer contentType="scrollView" backgroundColor={Colors.White}>
      <HeaderDetailsSection
        onPressShowMap={() => {
          navigationService.navigate(BookingStackRoute.CREATE_BOOKING_GUID, {});
        }}
      />
      <BodyDetailsSection
        navigateToBookingScreen={navigateToBookingScreen}
        AddressVisitedRecently={AddressVisitedRecently}
      />
      <ActionModal isVisible={!currentLocation} title="Bật vị trí của bạn">
        <Text type="footnote">
          Ứng dụng này yêu cầu dịch vụ vị trí được bật trên thiết bị của bạn và
          cho ứng dụng này. Bạn phải bật chúng trong Cài đặt trước khi sử dụng
          ứng dụng này
        </Text>
        <View style={[styles.flex_col, styles.alg_center, styles.jus_between]}>
          <PrimaryButton
            disabled={isLoading}
            style={[styles.mv_medium]}
            onPress={allowToEnableLocation}>
            Cho phép khi sử dụng ứng dụng
          </PrimaryButton>
          <LinkButton onPress={doNotAllow}>
            Không cho phép ứng dụng này
          </LinkButton>
        </View>
      </ActionModal>
    </SafeAreaContainer>
  );
};

export default HomeDetailScreen;
