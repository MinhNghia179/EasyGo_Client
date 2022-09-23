import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from '../../styles/colors';

interface IProps {
  onPress?: () => void;
  color?: string;
  style?: any;
  children?: React.ReactElement | string;
  disable?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large' | number;
}

const PrimaryButton = (props: IProps) => {
  const { onPress, color, children, style, disable, loading, size } = props;

  return (
    <View style={style}>
      <Button
        type="solid"
        title={children}
        buttonStyle={{
          backgroundColor: color ? color : Colors.Blue600,
          borderColor: 'transparent',
        }}
        onPress={onPress}
        disabled={disable}
        loading={loading}
        titleStyle={{
          color: Colors.White,
        }}
      />
    </View>
  );
};

export default PrimaryButton;
