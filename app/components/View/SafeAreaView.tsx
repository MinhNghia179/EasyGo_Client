import React from 'react';
import { Dimensions, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from '../../components/Text';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

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
  children?: React.ReactNode;
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
    children,
  } = props;

  const DimensionWidthDevice = Dimensions.get('window').width;
  const DimensionHeightDevice = Dimensions.get('window').height;

  return <SafeAreaProvider></SafeAreaProvider>;
};

export default SafeAreaView;
