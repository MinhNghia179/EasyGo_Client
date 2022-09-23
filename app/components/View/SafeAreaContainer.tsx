import React from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import LinkButton from '../Button/LinkButton';
import { Text } from '../Text';

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

const DimensionWidthDevice = Dimensions.get('window').width;
const DimensionHeightDevice = Dimensions.get('window').height;

const SafeAreaContainer = (props: IProps) => {
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

  const isHeaderVisible =
    title || left || right || leftIconName || rightIconName;

  const LeftOrRightHeader = (position: 'left' | 'right') => {
    const isLeftSide = position === 'left';
    return (
      <View>
        <LinkButton
          {...((leftIconOnPress || rightIconOnPress) && {
            onPress: isLeftSide ? leftIconOnPress : rightIconOnPress,
          })}>
          <Text>fdf</Text>
        </LinkButton>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.flex,
        {
          width: DimensionWidthDevice,
          height: DimensionHeightDevice,
        },
      ]}>
      <ScrollView>
        {isHeaderVisible && (
          <View
            style={[
              styles.alg_center,
              styles.jus_between,
              styles.flex,
              styles.flex_row,
              styles.p_medium,
            ]}>
            {(left || leftIconName) && LeftOrRightHeader('left')}
            <Text
              fontWeight="bold"
              numberOfLines={1}
              allowFontScaling
              type="subhead"
              color={titleColor ? titleColor : Colors.Text.DarkBlue}>
              {title}
            </Text>
            {(right || rightIconName) && LeftOrRightHeader('right')}
          </View>
        )}
        {children}
        {stickyBottom && <View></View>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
