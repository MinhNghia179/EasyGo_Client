import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';

interface IProps {
  title?: string;
  titleColor?: Colors;
  left?: React.ReactNode;
  right?: React.ReactNode;
  leftIconSize?: number;
  stickyBottom?: React.ReactNode;
  children?: React.ReactNode;
  hasDivider?: boolean;
  leftIconOnPress?: () => void;
  rightIconOnPress?: () => void;
  backgroundColor?: string;
  loadingView?: boolean;
  hasMarginBottom?: boolean;
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
    stickyBottom,
    children,
    hasDivider,
    loadingView,
    hasMarginBottom,
  } = props;

  const isHeaderVisible = !!title || !!left || !!right;

  return (
    <SafeAreaView
      style={[
        styles.flex,
        styles.relative,
        StyleSheet.absoluteFill,
        {
          width: DimensionWidthDevice,
          height: DimensionHeightDevice,
          backgroundColor: Colors.White,
        },
      ]}>
      <Spinner visible={loadingView} />
      {isHeaderVisible && (
        <>
          <View
            style={[
              styles.alg_center,
              styles.jus_between,
              styles.flex_row,
              styles.p_medium,
            ]}>
            <TouchableOpacity activeOpacity={1} onPress={leftIconOnPress}>
              {!!left && left}
            </TouchableOpacity>

            <Text
              fontWeight="bold"
              numberOfLines={1}
              allowFontScaling
              type="subhead"
              color={titleColor ? titleColor : Colors.Text.DarkBlue}>
              {title}
            </Text>

            <TouchableOpacity activeOpacity={1} onPress={rightIconOnPress}>
              {right}
            </TouchableOpacity>
          </View>

          {hasDivider && <Divider />}
        </>
      )}

      {children}

      {!!stickyBottom && (
        <View
          style={[
            styles.absolute,
            styles.full_width,
            {
              bottom: 0,
              marginBottom: Platform.OS === 'android' ? hp(30) : hp(30),
            },
          ]}>
          {stickyBottom}
        </View>
      )}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
