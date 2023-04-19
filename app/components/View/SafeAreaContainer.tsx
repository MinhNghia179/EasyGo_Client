import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  View,
  StatusBar,
  Keyboard,
  LayoutAnimation,
  UIManager,
  Dimensions,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { wp, hp } from '@services/responsive-screen-service';
import styles from '@styles/all-styles';
import { Colors } from '@styles/colors';
import { Text } from '@components/Typography';
// import { IconNode } from 'react-native-elements';
import {
  CheckIcon,
  BackIcon,
  MaterialClose,
  EllipsisH,
  SearchIcon,
  DotsHorizontalCircle,
  PlusIcon,
} from '@styles/Icons';
import IconSizes from '@constants/IconSizes';
import AppLayoutView from './AppLayoutView';

interface ISafeAreaViewProps {
  backgroundColor?: Colors | string;
  left?: React.ReactNode; // left component
  leftIconSize?: number; // left icon size
  leftIconName?: 'back' | 'check' | 'close'; // left icon name
  leftIconColor?: Colors; // left icon color
  leftIconOnPress?: () => void; // left icon handler
  title?: string;
  numberOfLineTitle?: number;
  titleColor?: Colors;
  right?: React.ReactNode; // right component
  rightIconSize?: number; // right icon size
  rightIconName?:
    | 'back'
    | 'check'
    | 'close'
    | 'ellipsis'
    | 'search'
    | 'dotHorizontalCircle'
    | 'plusIcon'; // right icon name
  rightIconColor?: Colors; // right icon color
  rightIconOnPress?: () => void; // right icon handler
  contentType: 'view' | 'scrollview'; // middle container scroll view or view
  bottom?: React.ReactNode;
  stickyBottom?: React.ReactNode;
  stickyBottomStyle?: { [key: string]: any };
  stickyBottomShadow?: boolean;
  showStickyBottom?: boolean;
  headerBordered?: boolean;
  headerStyle?: any;
  scrollViewBounce?: boolean;
  absoluteBottom?: boolean;
  additionalStyles?: any;
  showSystemToast?: boolean;
  showNotificationToast?: boolean;
  stickyTop?: React.ReactNode;
  stickyTopStyle?: { [key: string]: any };
  bgColorSpaceView?: Colors;
}

// SafeAreaView is App design layout which will use through all the app.
class SafeAreaView extends Component<ISafeAreaViewProps> {
  keyboardWillShowListener: any;
  keyboardWillHideListener: any;

  static defaultProps = {
    layoutMode: 'default',
    ...styles.bg_white,
    leftIconSize: IconSizes.small,
    leftIconColor: Colors.BlueGrey1000,
    titleColor: Colors.BlueGrey1000,
    rightIconSize: IconSizes.small,
    rightIconColor: Colors.BlueGrey1000,
    contentType: 'scrollview',
    scrollViewBounce: true,
    absoluteBottom: false,
    headerBordered: false,
  };
  state = {
    keyBoardVisible: false,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
      headerLeft: null,
      gesturesEnabled: false,
    };
  };
  // _showToast = (message) => {
  //   this.refs.toast.show(
  //     <View style={{ maxWidth: wp(311) }}>
  //       <View style={{ padding: wp(10), ...styles.flex_row }}>
  //         <View style={{ marginTop: wp(3) }}>
  //           <OctagonClose size={18} color={Colors.White} />
  //         </View>
  //         <View style={{ marginLeft: wp(10), maxWidth: wp(263) }}>
  //           <Text fontWeight={'regular'} type={'callout'} color={Colors.White}>
  //             {message}
  //           </Text>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  private _getIcon = (iconName, iconSize, iconColor, iconOnPress): any => {
    // const iconSize = wp(18);
    let icon: any = null;

    //iconRight
    switch (iconName) {
      case 'check':
        {
          icon = (
            <CheckIcon
              size={iconSize}
              color={iconColor}
              onPress={iconOnPress}
            />
          );
        }
        break;
      case 'back':
        {
          icon = (
            <BackIcon size={iconSize} color={iconColor} onPress={iconOnPress} />
          );
        }
        break;
      case 'close':
        {
          icon = (
            <MaterialClose
              size={iconSize}
              color={iconColor}
              onPress={iconOnPress}
            />
          );
        }
        break;
      case 'ellipsis':
        {
          icon = (
            <EllipsisH
              size={iconSize}
              color={iconColor}
              onPress={iconOnPress}
            />
          );
        }
        break;
      case 'search':
        {
          icon = (
            <SearchIcon
              size={iconSize}
              color={iconColor}
              onPress={iconOnPress}
            />
          );
        }
        break;
      case 'dotHorizontalCircle':
        {
          icon = (
            <DotsHorizontalCircle
              size={iconSize}
              color={iconColor}
              onPress={iconOnPress}
            />
          );
        }
        break;
      case 'plusIcon':
        {
          icon = (
            <PlusIcon size={iconSize} color={iconColor} onPress={iconOnPress} />
          );
        }
        break;
    }

    return icon;
  };

  private _keyboardWillShow = e => {
    this.setState({ keyBoardVisible: true });
  };

  private _keyboardWillHide = () => {
    this.setState({ keyBoardVisible: false });
  };

  componentDidMount = () => {
    // if (Platform.OS === 'ios') {
    //   this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow.bind(this));
    //   this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide.bind(this));
    // }
  };

  componentWillUnmount() {
    // if (Platform.OS === 'ios') {
    //   this.keyboardWillShowListener.remove();
    //   this.keyboardWillHideListener.remove();
    // }
  }

  render() {
    const {
      backgroundColor,
      left,
      title,
      leftIconSize = IconSizes.small,
      leftIconName,
      leftIconColor,
      leftIconOnPress,
      titleColor,
      right,
      rightIconSize = IconSizes.small,
      rightIconName,
      rightIconColor,
      rightIconOnPress,
      contentType,
      headerStyle = {},
      bottom,
      absoluteBottom,
      stickyBottom,
      headerBordered = false,
      additionalStyles = {},
      showNotificationToast,
      showSystemToast,
      stickyBottomStyle = {},
      stickyTop,
      stickyTopStyle,
      stickyBottomShadow = false,
      showStickyBottom = true,
      bgColorSpaceView = Colors.White,
      numberOfLineTitle,
    } = this.props;

    const viewStyle = {
      backgroundColor: backgroundColor,
      paddingTop:
        Platform.OS === 'android' ? hp(50 - StatusBar.currentHeight) : hp(50),
      ...styles.flex,
    };

    const showHeader = left || leftIconName || title || right || rightIconName;
    const ContentView = contentType === 'view' ? View : ScrollView;

    const borderedStyle = headerBordered
      ? {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: Colors.Background.GreyLight,
        }
      : {};

    const spaceViewHeight = stickyBottomStyle.marginBottom
      ? stickyBottomStyle.marginBottom
      : Platform.OS === 'android'
      ? hp(50)
      : hp(this.state.keyBoardVisible ? 30 : 50);

    return (
      <View style={[viewStyle, StyleSheet.absoluteFill]}>
        {/*Header View */}
        {showHeader && (
          <View
            style={{
              ...styles.flex_row,
              paddingHorizontal: wp(13),
              paddingVertical: hp(10),
              ...borderedStyle,
              ...headerStyle,
            }}>
            {/* Left Icon */}
            <View style={{ width: leftIconName ? leftIconSize : undefined }}>
              {leftIconName
                ? this._getIcon(
                    leftIconName,
                    leftIconSize,
                    leftIconColor,
                    leftIconOnPress,
                  )
                : left}
            </View>

            {/* Title */}
            <View
              style={{
                ...styles.flex_row,
                ...styles.flex,
                ...styles.justify_center,
                ...styles.align_center,
              }}>
              <Text
                fontWeight={'demibold'}
                type={'callout'}
                color={titleColor}
                numberOfLines={numberOfLineTitle}>
                {title}
              </Text>
            </View>

            {/* Right Icon */}
            <View style={{ width: rightIconName ? rightIconSize : undefined }}>
              {rightIconName
                ? this._getIcon(
                    rightIconName,
                    rightIconSize,
                    rightIconColor,
                    rightIconOnPress,
                  )
                : right}
            </View>
          </View>
        )}
        {stickyTop && (
          <View
            style={{
              position: absoluteBottom ? 'absolute' : 'relative',
              opacity: 0.9,
              bottom: 0,
              width: '100%',
              elevation: 24,
              ...stickyTopStyle,
            }}>
            {stickyTop}
          </View>
        )}
        {/* Content View */}
        <ContentView
          keyboardShouldPersistTaps="handled"
          style={{ ...styles.flex, ...additionalStyles }}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={true}>
          {this.props.children}
          {/* bottom component with paddingBottom (for button) */}
          {bottom && (
            <View
              style={{
                position: absoluteBottom ? 'absolute' : 'relative',
                bottom: 0, // this will only take effect if position is absolute, can leave this here.
                ...styles.ph_default,
                width: '100%', // needed for absolute bottoms, leave it here.
                //paddingTop: hp(10),
                marginBottom:
                  Platform.OS === 'android'
                    ? hp(50)
                    : hp(this.state.keyBoardVisible ? 30 : 50),
              }}>
              {bottom}
            </View>
          )}
        </ContentView>
        {showStickyBottom && stickyBottom && (
          <View
            style={[
              {
                position: absoluteBottom ? 'absolute' : 'relative',
                bottom: 0, // this will only take effect if position is absolute, can leave this here.
                width: '100%', // needed for absolute bottoms, leave it here.
                //paddingTop: hp(10),
                marginBottom:
                  Platform.OS === 'android'
                    ? hp(50)
                    : hp(this.state.keyBoardVisible ? 30 : 50),

                ...stickyBottomStyle,
              },
              stickyBottomShadow && {
                backgroundColor: Colors.White,
                shadowColor: Colors.Black,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.9,
                shadowRadius: 16.0,
                elevation: 24,
              },
            ]}>
            {stickyBottom}
            <View
              style={{
                backgroundColor: bgColorSpaceView,
                marginBottom: -spaceViewHeight,
                height: spaceViewHeight,
              }}
            />
          </View>
        )}
      </View>
    );
  }
}

export default SafeAreaView;
