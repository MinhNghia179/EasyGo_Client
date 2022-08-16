import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from '../../styles/colors';

interface IProps {
  onPress?: () => void;
  color?: string;
  style?: any;
  children?: React.ReactElement | string;
  opacity?: number;
  disable?: boolean;
  loading?: boolean;
}

const SecondaryButton = (props: IProps) => {
  const { onPress, color, children, style, opacity, disable, loading } = props;

  const buttonStyle = {
    backgroundColor: color || Colors.Blue600,
    opacity,
  };

  const titleStyle = {};

  return (
    <View style={style}>
      <Button
        type="solid"
        title={children}
        buttonStyle={buttonStyle}
        onPress={onPress}
        disabled={disable}
        loading={loading}
        titleStyle={titleStyle}
      />
    </View>
  );
};

export default SecondaryButton;
