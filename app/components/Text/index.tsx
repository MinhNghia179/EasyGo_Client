import React from 'react';
import {Text} from 'react-native';
interface IProps {
  color?: string;
  fontWeight?: string;
  type?: string;
  numberOfLines?: number;
  textAlign?: 'left' | 'center' | 'right';
}

const AppText: React.FC<IProps> = props => {
  const {} = props;
  return <Text></Text>;
};

export default AppText;
