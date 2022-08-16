import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

interface IProps {
  onPress?: () => void;
  style?: any;
  disabled?: boolean;
  loading?: boolean;
  color?: Colors;
  children?: React.ReactElement | string;
}

const GhostButton = (props: IProps) => {
  const { onPress, children, style, disabled, color, loading } = props;

  const titleStyle = {};

  const buttonStyle = {};

  return (
    <View style={style}>
      <Button
        disabled={disabled}
        type="outline"
        title={children}
        onPress={onPress}
        loading={loading}
        titleStyle={titleStyle}
        buttonStyle={buttonStyle}
      />
    </View>
  );
};

export default GhostButton;
