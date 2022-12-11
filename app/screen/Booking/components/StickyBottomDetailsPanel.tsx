import React from 'react';
import { View } from 'react-native';
import LinkButton from '../../../components/Button/LinkButton';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import { BookingGuidStep } from '../utils/constant';

interface IProps {
  setVisibleConfirmModal?: () => void;
  step?: string;
}

const StickyBottomDetailsPanel: React.FC<IProps> = ({
  setVisibleConfirmModal,
  step,
}) => {
  const renderStepDetails = () => {
    switch (step) {
      case BookingGuidStep.SET_ROUTE: {
        break;
      }
      case BookingGuidStep.SELECT_SERVICE: {
        break;
      }
      case BookingGuidStep.PAYMENT_METHOD: {
        break;
      }
      case BookingGuidStep.BOOKING_DETAILS: {
        break;
      }
      case BookingGuidStep.SEARCHING_RIDE: {
        break;
      }
      case BookingGuidStep.DRIVER_INFO: {
        break;
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
