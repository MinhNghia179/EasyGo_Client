import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { useDispatch, useSelector } from 'react-redux';
import { HomeStackRoute, SocketEvent } from '../../../constants/constant';
import navigationService from '../../../navigation/navigation-service';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import BookingInfo from '../steps/BookingInfo';
import PickUpLocationSection from '../steps/PickUpLocationSection';
import SearchingRide from '../steps/SearchingRide';
import SelectServiceSection from '../steps/SelectServiceSection';
import { BookingGuidStep } from '../utils/constant';
import FinishBookingModal from './FinishBookingModal';
import SearchAddressModal from './SearchAddressModal';

interface IProps {
  setVisibleConfirmModal?: () => void;
}

const StickyBottomDetailsPanel: React.FC<IProps> = ({
  setVisibleConfirmModal,
}) => {
  const dispatch = useDispatch<IRootDispatch>();

  const { socket, portalUser } = useSelector((state: IRootState) => ({
    socket: state.authStore.socket,
    portalUser: state.authStore.portalUser,
  }));

  const [step, setStep] = useState<string>(BookingGuidStep.SET_ROUTE);
  const [searchAddressModalVisible, setSearchAddressModalVisible] =
    useState<boolean>(false);
  const [finishBookingModalVisible, setFinishBookingModalVisible] =
    useState<boolean>(false);

  const driverAcceptBooking = (info: any) => {
    dispatch.bookingStore.setDriverInfo(info);
    setStep(BookingGuidStep.BOOKING_INFO);
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Hoan hô!',
      textBody: 'Đã tìm thấy tài xế cho bạn và đang đến',
    });
  };

  const driverFinishBooking = (info: any) => {
    setStep(BookingGuidStep.COMPLETE_BOOKING);
    setFinishBookingModalVisible(true);
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Hoan hô!',
      textBody: 'Cuốc xe của bạn đã hoàn thành!.',
    });
  };

  const trackPosition = (info: any) => {
    dispatch.bookingStore.setDriverPosition({
      latitude: info?.lat,
      longitude: info?.lon,
    });
  };

  const handleCloseFinishBookingModal = () => {
    dispatch.bookingStore.setClearState();
    navigationService.navigate(HomeStackRoute.DASHBOARD, {});
  };

  useEffect(() => {
    Promise.all([
      socket?.on(SocketEvent.SEND_DRIVER_INFO, data =>
        driverAcceptBooking(data),
      ),
      socket?.on(SocketEvent.FINISH_BOOKING, data => driverFinishBooking(data)),
      socket?.on(SocketEvent.TRACK, data => trackPosition(data)),
    ]);
  }, [socket]);

  return (
    <View
      style={[
        styles.p_medium,
        {
          backgroundColor: Colors.White,
        },
      ]}>
      {step === BookingGuidStep.SET_ROUTE && (
        <PickUpLocationSection
          nextStep={() => setStep(BookingGuidStep.SELECT_SERVICE)}
          onOpenSearchAddressModal={() => setSearchAddressModalVisible(true)}
        />
      )}

      {step === BookingGuidStep.SELECT_SERVICE && (
        <SelectServiceSection
          nextStep={setStep}
          prevStep={() => setStep(BookingGuidStep.SET_ROUTE)}
        />
      )}

      {step === BookingGuidStep.SEARCHING_RIDE && <SearchingRide />}

      {step === BookingGuidStep.BOOKING_INFO && <BookingInfo />}

      {step === BookingGuidStep.COMPLETE_BOOKING && (
        <FinishBookingModal
          visible={finishBookingModalVisible}
          userName={portalUser?.username}
          onClose={handleCloseFinishBookingModal}
        />
      )}
      <SearchAddressModal
        isOpen={searchAddressModalVisible}
        onClose={() => setSearchAddressModalVisible(false)}
      />
    </View>
  );
};

export default StickyBottomDetailsPanel;
