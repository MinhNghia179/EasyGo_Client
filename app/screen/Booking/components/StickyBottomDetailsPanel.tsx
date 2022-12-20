import React, { useState } from 'react';
import { View } from 'react-native';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import BookingInfo from '../steps/BookingInfo';
import DriverInfo from '../steps/DriverInfo';
import PaymentMethodSection from '../steps/PaymentMethodSection';
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

  const renderStepDetails = (): JSX.Element => {
    switch (step) {
      case BookingGuidStep.SET_ROUTE: {
        return (
          <PickUpLocationSection
            onOpenSearchAddressModal={() => setSearchAddressModalVisible(true)}
          />
        );
      }
      case BookingGuidStep.SELECT_SERVICE: {
        return <SelectServiceSection />;
      }
      case BookingGuidStep.PAYMENT_METHOD: {
        return <PaymentMethodSection />;
      }
      case BookingGuidStep.BOOKING_DETAILS: {
        return <BookingInfo />;
      }
      case BookingGuidStep.SEARCHING_RIDE: {
        return <SearchingRide />;
      }
      case BookingGuidStep.DRIVER_INFO: {
        return <DriverInfo />;
      }
    }
  };

  return (
    <View
      style={[
        styles.p_medium,
        {
          backgroundColor: Colors.White,
        },
      ]}>
      {renderStepDetails()}
      <SearchAddressModal
        isOpen={searchAddressModalVisible}
        onClose={() => setSearchAddressModalVisible(false)}
      />
    </View>
  );
};

export default StickyBottomDetailsPanel;
