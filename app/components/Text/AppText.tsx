import React from 'react';
import {Text} from 'react-native';
import {Colors} from '../../styles/colors';
import styles from '../../styles/style-sheet';

interface IAppTextProps {
  type?:
    | 'headline'
    | 'body'
    | 'callout'
    | 'subhead'
    | 'footnote'
    | 'caption1'
    | 'caption2'; // text type
  fontWeight?: 'light' | 'regular' | 'medium' | 'demibold' | 'bold';
  color?: Colors;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  numberOfLines?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: any;
  allowFontScaling?: boolean;
  children?: React.ReactNode;
  bold?: boolean;
}

const AppText = (props: IAppTextProps) => {
  const {
    type,
    fontWeight,
    color,
    ellipsizeMode,
    numberOfLines,
    textAlign,
    allowFontScaling = true,
    style = {},
    children,
    bold,
  } = props;

  const textStyle: [any] = [{color}];

  switch (type) {
    case 'headline':
      textStyle.push({...styles.fs_18});
      break;
    case 'body':
      textStyle.push({...styles.fs_17});
      break;
    case 'callout':
      textStyle.push({...styles.fs_16});
      break;
    case 'subhead':
      textStyle.push({...styles.fs_14});
      break;
    case 'footnote':
      textStyle.push({...styles.fs_13});
      break;
    case 'caption1':
      textStyle.push({...styles.fs_12});
      break;
    case 'caption2':
      textStyle.push({...styles.fs_11});
      break;
  }

  if (textAlign) {
    textStyle.push({textAlign: textAlign});
  }

  return (
    <Text
      style={[textStyle, {...style}]}
      numberOfLines={numberOfLines ? numberOfLines : null}
      ellipsizeMode={ellipsizeMode ? ellipsizeMode : null}
      allowFontScaling={allowFontScaling}>
      {children}
    </Text>
  );
};

export default AppText;
