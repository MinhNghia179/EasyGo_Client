import React, { useState } from 'react';
import { View } from 'react-native';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import InputText from '../../../components/Input/InputText';
import { ActionModal } from '../../../components/Modal';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {
  visible: boolean;
  isLoading: boolean;
  onClose: () => void;
  onCancelBooking: () => void;
}

const CancelBookingModal = (props: IProps) => {
  const { visible, isLoading, onClose, onCancelBooking } = props;

  const [reasonNote, setReasonNote] = useState<string>('');

  const handleOnClose = () => {
    setReasonNote('');
    onClose();
  };

  return (
    <ActionModal
      onClose={handleOnClose}
      isVisible={visible}
      title="Cancel Booking">
      <InputText
        isRequired={false}
        value={reasonNote}
        onChange={setReasonNote}
        label="Reason for cancellation"
      />
      <View style={[styles.mv_large]}>
        <Text type="caption1">
          <Text fontWeight="bold">Free cancellation!</Text> You can cancel this
          booking now and you won't be charged anything.
        </Text>
      </View>
      <View style={[styles.flex_row, styles.jus_end]}>
        <SecondaryButton onPress={handleOnClose}>Close</SecondaryButton>
        <PrimaryButton
          style={[styles.ml_small]}
          disabled={!reasonNote}
          color={Colors.Red400}
          loading={isLoading}
          onPress={onCancelBooking}>
          Continue with cancellation
        </PrimaryButton>
      </View>
    </ActionModal>
  );
};

export default CancelBookingModal;
