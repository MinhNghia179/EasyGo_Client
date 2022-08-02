import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Text } from '../../components/Text';
import { APP_NAME } from '../../constants/constant';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

const DimensionWidthDevice = Dimensions.get('window').width;
const DimensionHeightDevice = Dimensions.get('window').height;

interface IProps {}

const HomeScreen = (props: IProps) => {
  const {} = props;

  const [loading, setLoading] = useState<boolean>(false);

  const _onNavigateScreen = () => {};

  const _onSubmitButton = (name: string) => {
    setLoading(true);
    setLoading(false);
  };

  return (
    <View
      style={[
        styles.mt_medium,
        styles.flex,
        styles.flex_col,
        styles.centered,
        {
          width: DimensionWidthDevice,
          height: DimensionHeightDevice,
        },
      ]}>
      <View style={[styles.mb_x2_large]}>
        <Text type="callout" color={Colors.Black} textAlign={'center'}>
          {APP_NAME}
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
