import React, { useState } from 'react';
import { View } from 'react-native';
import LinkButton from '../../../components/Button/LinkButton';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import BookingInfo from '../steps/BookingInfo';
import DriverInfo from '../steps/DriverInfo';
import PaymentMethodSection from '../steps/PaymentMethodSection';
import PickUpLocationSection from '../steps/PickUpLocationSection';
import SearchingRide from '../steps/SearchingRide';
import SelectServiceSection from '../steps/SelectServiceSection';
import { BookingGuidStep } from '../utils/constant';

interface IProps {
  setVisibleConfirmModal?: () => void;
}

const StickyBottomDetailsPanel: React.FC<IProps> = ({
  setVisibleConfirmModal,
}) => {
  const [step, setStep] = useState<string>(BookingGuidStep.SET_ROUTE);

  const renderStepDetails = (): JSX.Element => {
    switch (step) {
      case BookingGuidStep.SET_ROUTE: {
        return <PickUpLocationSection />;
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
    return <></>;
  };

  return (
    <View
      style={[
        styles.p_medium,
        {
          backgroundColor: Colors.White,
        },
      ]}>
      <View style={[styles.flex_row, styles.jus_end]}>
        <LinkButton color={Colors.Red500} onPress={setVisibleConfirmModal}>
          Remove
        </LinkButton>
      </View>
      {renderStepDetails()}
    </View>
  );
};

export default StickyBottomDetailsPanel;
