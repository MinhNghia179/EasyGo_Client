import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';

interface IProps {
  children?: React.ReactNode;
  borderRadius?: number;
  hasBorderRadius?: boolean;
}

const CardItem = (props: IProps) => {
  const { children, borderRadius } = props;

  return (
    <View
      style={[
        {
          backgroundColor: Colors.White,
          borderRadius: 2,
          // box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        },
      ]}>
      {children}
    </View>
  );
};

export default CardItem;
