import React, { useState } from 'react';
import { View } from 'react-native';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import BookingInfo from '../steps/BookingInfo';
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
  const [step, setStep] = useState<string>(BookingGuidStep.SET_ROUTE);
  const [searchAddressModalVisible, setSearchAddressModalVisible] =
    useState<boolean>(false);

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

      <SearchAddressModal
        isOpen={searchAddressModalVisible}
        onClose={() => setSearchAddressModalVisible(false)}
      />
    </View>
  );
};

export default StickyBottomDetailsPanel;
