import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { Animation } from 'react-native-animatable';
import Modal from 'react-native-modal';
import { wp } from '../../services/response-screen-service';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import { Text } from '../Text';

interface IProps {
  title?: string;
  isVisible?: boolean;
  children?: React.ReactNode;
  animationIn?: Animation;
  animationOut?: Animation;
  onClose?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  headerStyle?: object;
  headerTitleStyle?: object;
  description?: string;
}

const BottomSheetModal = (props: IProps) => {
  const {
    title,
    isVisible,
    animationIn = 'slideInDown',
    animationOut = 'slideOutDown',
    children,
    onClose,
    leftIcon,
    rightIcon,
    headerStyle,
    headerTitleStyle,
    description,
  } = props;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn={animationIn}
      animationOut={animationOut}
      style={[styles.flex, styles.jus_center, styles.alg_end]}>
      {(!!title || !!leftIcon || !!rightIcon) && (
        <View
          style={[
            styles.ph_large,
            styles.pv_large,
            styles.bb_small,
            {
              borderColor: Colors.Grey100,
              borderTopLeftRadius: wp(8),
              borderTopRightRadius: wp(8),
              ...headerStyle,
            },
          ]}>
          <View
            style={[
              styles.flex,
              styles.flex_row,
              styles.jus_between,
              styles.alg_center,
              styles.mb_small,
              { ...headerTitleStyle },
            ]}>
            {leftIcon ? leftIcon : null}

            {title ? (
              _.isString(title) ? (
                <Text type="callout" fontWeight="bold">
                  {title}
                </Text>
              ) : (
                title
              )
            ) : null}

            {rightIcon ? rightIcon : null}
          </View>

          {!!description && (
            <Text type="subhead" color={Colors.Green700}>
              {description}
            </Text>
          )}
        </View>
      )}
      {children}
    </Modal>
  );
};

export default BottomSheetModal;
