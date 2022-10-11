import React from 'react';
import { Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';
import Icon from 'react-native-vector-icons/Octicons';
import IconSizes from '../../styles/icon-size';

interface IProps {
  title?: string;
  titleColor?: Colors;
  left?: React.ReactNode;
  right?: React.ReactNode;
  leftIconSize?: number;
  leftIconOnPress?: () => void;
  rightIconSize?: number;
  rightIconColor?: Colors;
  rightIconOnPress?: () => void;
  stickyBottom?: React.ReactNode;
  children?: React.ReactNode;
  hasDivider?: boolean;
}

const DimensionWidthDevice = Dimensions.get('window').width;
const DimensionHeightDevice = Dimensions.get('window').height;

const SafeAreaContainer = (props: IProps) => {
  const {
    title,
    left,
    right,
    leftIconOnPress,
    titleColor,
    rightIconOnPress,
    rightIconColor,
    stickyBottom,
    children,
    hasDivider,
  } = props;

  const isHeaderVisible = !!title || !!left || !!right;

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
          <>
            <View
              style={[
                styles.alg_center,
                styles.jus_between,
                styles.flex,
                styles.flex_row,
                styles.p_medium,
              ]}>
              <Icon
                name="chevron-left"
                size={IconSizes.x_small}
                color={Colors.Text.Primary}
                onPress={leftIconOnPress}
              />
              <Text
                fontWeight="bold"
                numberOfLines={1}
                allowFontScaling
                type="subhead"
                color={titleColor ? titleColor : Colors.Text.DarkBlue}>
                {title}
              </Text>
              <TouchableOpacity onPress={rightIconOnPress}>
                {right}
              </TouchableOpacity>
            </View>
            {hasDivider && <Divider />}
          </>
        )}
        {children}
        {stickyBottom && <View></View>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
