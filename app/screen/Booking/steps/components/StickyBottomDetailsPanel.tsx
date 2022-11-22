import React from 'react';
import { View } from 'react-native';
import LinkButton from '../../../../components/Button/LinkButton';
import { Colors } from '../../../../styles/colors';
import styles from '../../../../styles/style-sheet';
import PaymentMethodSection from '../PaymentMethodSection';
import PickUpLocationSection from '../PickUpLocationSection';
import SelectServiceSection from '../SelectServiceSection';

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
      case '': {
        return <PickUpLocationSection />;
      }
      case '': {
        return <SelectServiceSection />;
      }
      case '': {
        return <PaymentMethodSection />;
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
