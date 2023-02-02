import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { useDispatch, useSelector } from 'react-redux';
import { SocketEvent } from '../../../constants/constant';
import { ICoordinates } from '../../../interfaces/home-interfaces';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import BookingInfo from '../steps/BookingInfo';
import CompleteBooking from '../steps/CompleteBooking';
import PickUpLocationSection from '../steps/PickUpLocationSection';
import SearchingRide from '../steps/SearchingRide';
import SelectServiceSection from '../steps/SelectServiceSection';
import { BookingGuidStep } from '../utils/constant';
import SearchAddressModal from './SearchAddressModal';

interface IProps {
  setVisibleConfirmModal?: () => void;
}

const StickyBottomDetailsPanel: React.FC<IProps> = ({
  setVisibleConfirmModal,
}) => {
  const dispatch = useDispatch<IRootDispatch>();

  const { socket } = useSelector((state: IRootState) => ({
    socket: state.authStore.socket,
  }));

  const [step, setStep] = useState<string>(BookingGuidStep.SET_ROUTE);
  const [searchAddressModalVisible, setSearchAddressModalVisible] =
    useState<boolean>(false);

  const driverAcceptBooking = (info: any) => {
    dispatch.bookingStore.setDriverInfo(info);
    setStep(BookingGuidStep.BOOKING_INFO);
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Acclaim!',
      textBody:
        'Congrats! The driver has been found and is coming to pick you up',
    });
  };

  const driverFinishBooking = (info: any) => {
    setStep(BookingGuidStep.COMPLETE_BOOKING);
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Acclaim!',
      textBody: 'Congrats! The ride is completed.',
    });
    dispatch.bookingStore.setClearState();
  };

  const trackPosition = (info: ICoordinates) => {
    dispatch.bookingStore.setDriverPosition(info);
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

      {step === BookingGuidStep.COMPLETE_BOOKING && <CompleteBooking />}

      <SearchAddressModal
        isOpen={searchAddressModalVisible}
        onClose={() => setSearchAddressModalVisible(false)}
      />
    </View>
  );
};

export default StickyBottomDetailsPanel;
