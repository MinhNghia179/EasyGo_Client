import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinkButton from '../../../components/Button/LinkButton';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import { ActionModal } from '../../../components/Modal';
import { Text } from '../../../components/Text';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  visible: boolean;
  userName: string;
  onClose: () => void;
}

const FinishBookingModal = (props: IProps) => {
  const { visible, onClose, userName } = props;

  return (
    <ActionModal
      onClose={onClose}
      isVisible={visible}
      title="Kết thúc chuyến đi">
      <View
        style={[
          styles.flex_row,
          styles.jus_center,
          styles.alg_center,
          styles.mv_small,
        ]}>
        <Icon
          style={[styles.mh_small]}
          name="circledown"
          size={IconSizes.x_large}
          color={Colors.Green400}
        />
      </View>
      <View style={[styles.mv_small]}>
        <Text type="caption1">
          Cảm ơn! <Text fontWeight="bold">{userName}</Text>. Tài xế đã hoàn
          thành cuốc xe. Đừng quên <Text fontWeight="bold">EASY GO</Text> và
          chúc bạn có một ngày thật tuyệt vời
        </Text>
        <View style={[styles.mv_small]}>
          <Text type="caption1">
            Mọi thắc mắc xin vui lòng liên hệ với chúng tôi:{' '}
            <LinkButton>easygo@gmail.com</LinkButton>
          </Text>
        </View>
      </View>
      <View style={[styles.flex_row, styles.jus_end]}>
        <SecondaryButton onPress={onClose}>Đóng</SecondaryButton>
      </View>
    </ActionModal>
  );
};

export default FinishBookingModal;
