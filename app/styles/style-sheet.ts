import {StyleSheet} from 'react-native';
import {hp, wp} from '../services/response-screen-service';
import {Colors} from './colors';

const wpUnits = {
  x2_small: wp(1),
  x_small: wp(4),
  small: wp(8),
  p12: wp(12),
  medium: wp(16),
  large: wp(24),
  x_large: wp(32),
  x2_large: wp(40),
  x3_large: wp(48),
  x4_large: wp(56),
  x5_large: wp(64),
};

const hpUnits = {
  x2_small: hp(1),
  x_small: hp(4),
  small: hp(8),
  p12: hp(12),
  medium: hp(16),
  large: hp(24),
  x_large: hp(32),
  x2_large: wp(40),
  x3_large: wp(48),
  x4_large: wp(56),
  x5_large: hp(64),
  x6_large: hp(72),
  x7_large: hp(80),
  x8_large: hp(88),
};

const FontWeights = StyleSheet.create({
  fw_light: {fontFamily: 'inter-light'},
  fw_regular: {fontFamily: 'inter-regular'},
  fw_demibold: {fontFamily: 'inter-semibold'},
  fw_medium: {fontFamily: 'inter-medium'},
  fw_bold: {fontFamily: 'inter-bold'},
});

const Backgrounds = StyleSheet.create({
  bg_white: {backgroundColor: Colors.White},
  bg_black: {backgroundColor: Colors.Black},
});

const Radius = StyleSheet.create({
  rounded: {borderRadius: 8},
  rounded_small: {borderRadius: 4},
  rounded_full: {borderRadius: 9999},
});

const Positions = StyleSheet.create({
  absolute: {position: 'absolute'},
  relative: {position: 'relative'},
});

const Flexes = StyleSheet.create({
  fl: {flex: 1},
  fl_2: {flex: 2},
  fl_3: {flex: 3},
  fl_4: {flex: 4},

  fl_wrap: {flexWrap: 'wrap'},

  fl_row: {flexDirection: 'row'},
  fl_row_rev: {flexDirection: 'row-reverse'},
  fl_col: {flexDirection: 'column'},
  fl_col_rev: {flexDirection: 'column-reverse'},

  jus_end: {justifyContent: 'flex-end'},
  jus_start: {justifyContent: 'flex-start'},
  jus_center: {justifyContent: 'center'},
  jus_between: {justifyContent: 'space-between'},
  jus_around: {justifyContent: 'space-around'},
  jus_evenly: {justifyContent: 'space-evenly'},

  alg_end: {alignItems: 'flex-end'},
  alg_start: {alignItems: 'flex-start'},
  alg_center: {alignItems: 'center'},
  alg_stretch: {alignItems: 'stretch'},
  alg_base: {alignItems: 'baseline'},

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StyleSheet.create({
  ...FontWeights,
  ...Radius,
  ...Backgrounds,
  ...Flexes,
  ...Positions,
});
