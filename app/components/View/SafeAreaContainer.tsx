import React from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import { hp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';

interface IProps {
  title?: string;
  titleColor?: Colors;
  left?: React.ReactNode;
  right?: React.ReactNode;
  leftIconSize?: number;
  leftIconOnPress?: () => void;
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
    stickyBottom,
    children,
    hasDivider,
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
              <TouchableOpacity activeOpacity={1} onPress={leftIconOnPress}>
                <Icon
                  name="arrowleft"
                  size={IconSizes.x_small}
                  color={Colors.Black}
                  onPress={leftIconOnPress}
                />
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
      </ScrollView>

      {!!stickyBottom && (
        <View
          style={[
            styles.absolute,
            styles.full_width,
            styles.p_small,
            {
              bottom: 0,
              marginBottom: Platform.OS === 'android' ? hp(40) : hp(30),
            },
          ]}>
          {stickyBottom}
        </View>
      )}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
