import { Text } from '../../components/Text';
import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../styles/colors';

interface IProps {
  title?: string;
  titleColor?: Colors;
  left?: React.ReactNode;
  right?: React.ReactNode;
  leftIconName?: 'back' | 'close';
  leftIconSize?: number;
  leftIconColor?: Colors;
  leftIconOnPress?: () => void;
  rightIconName?: 'back' | 'close';
  rightIconSize?: number;
  rightIconColor?: Colors;
  rightIconOnPress?: () => void;
  stickyBottom?: React.ReactNode;
}

const SafeAreaView = (props: IProps) => {
  const {
    title,
    left,
    leftIconName,
    right,
    leftIconOnPress,
    rightIconName,
    titleColor,
    leftIconSize,
    rightIconOnPress,
    leftIconColor,
    rightIconColor,
    stickyBottom,
  } = props;
  return (
    <View style={[]}>
      <View style={[]}></View>
      {stickyBottom && (
        <View style={[]}>
          <Text>Sticky Bottom</Text>
        </View>
      )}
    </View>
  );
};

export default SafeAreaView;
