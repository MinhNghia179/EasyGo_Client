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
  onCancelBooking: (reason: string) => void;
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
      title="Hủy cuốc xe">
      <InputText
        isRequired={false}
        value={reasonNote}
        placeholder="Nhập tại đây"
        onChange={setReasonNote}
        label="Lý do hủy bỏ cuốc xe"
      />
      <View style={[styles.mv_large]}>
        <Text type="caption1">
          <Text fontWeight="bold">Hủy miễn phí!</Text>&nbsp;Bạn có thể hủy bỏ
          cuốc xe ngay bây giờ và bạn sẽ không bị tính phí bất cứ điều gì.
        </Text>
      </View>
      <View style={[styles.flex_row, styles.jus_end]}>
        <SecondaryButton onPress={handleOnClose}>Đóng</SecondaryButton>
        <PrimaryButton
          style={[styles.ml_small]}
          disabled={!reasonNote}
          color={Colors.Red400}
          loading={isLoading}
          onPress={() => onCancelBooking(reasonNote)}>
          Tiếp tục hủy bỏ cuốc xe
        </PrimaryButton>
      </View>
    </ActionModal>
  );
};

export default CancelBookingModal;
