import React from 'react';
import { View } from 'react-native';
import Toast from 'react-native-root-toast';
import { Text } from '../../components/Text';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

interface IProps {
  position?: typeof Toast.positions.TOP;
  title?: string;
  description?: string;
  duration?: number;
}

const AlertError = (props: IProps) => {
  const { position, title, description, duration } = props;

  return (
    <Toast
      shadow
      visible={true}
      hideOnPress={false}
      position={position}
      duration={2000}>
      <View style={[styles.p_medium, styles.rounded]}>
        <Text type="subhead" color={Colors.White} fontWeight="bold">
          {title}
        </Text>
        <Text type="footnote" color={Colors.White}>
          {description}
        </Text>
      </View>
    </Toast>
  );
};

export default AlertError;
