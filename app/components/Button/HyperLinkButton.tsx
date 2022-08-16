import React from 'react';
import { View } from 'react-native';
interface IProps {
  onPress?: () => void;
  children?: React.ReactElement | string;
  style?: any;
}
const HyperLinkButton = (props: IProps) => {
  const { onPress, children, style } = props;
  return <View style={style}>{children}</View>;
};

export default HyperLinkButton;
