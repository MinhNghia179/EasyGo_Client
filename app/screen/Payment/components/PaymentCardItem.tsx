import React from 'react';
import CardItem from '../../../components/Card/CardItem';

import { View } from 'react-native';
import styles from '../../../styles/style-sheet';

interface IProps {
  onPress?: () => void;
  description?: string;
  icon?: React.ReactNode;
}

const PaymentCardItem = (props: IProps) => {
  const { onPress, description, icon } = props;

  return (
    <View style={[styles.pv_small]}>
      <CardItem
        hasShadow
        leftIcon={icon}
        hasBorderRadius
        onPress={onPress}
        description={description}
      />
    </View>
  );
};

export default PaymentCardItem;
