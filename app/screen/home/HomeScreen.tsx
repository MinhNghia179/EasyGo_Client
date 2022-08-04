import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-elements';
import Toast from 'react-native-root-toast';
import AlertError from '../../components/Alert/AlertError';
import { ActionModal } from '../../components/Modal';
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
  const [visibleModal, setVisibleModal] = useState(false);

  const _onNavigateScreen = () => {};

  const _onSubmitButton = (name: string) => {
    setLoading(true);
    setLoading(false);
  };

  const _onClick = () => {
    () => setVisibleModal(true);
    Toast.show('Hello', {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
    });
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
        <Text type="callout" color={Colors.Black} fontWeight={'bold'}>
          {APP_NAME}
        </Text>
      </View>

      <Button onPress={_onClick} title="onClick" />

      <ActionModal
        isVisible={visibleModal}
        title="App đặt xe"
        onClose={() => setVisibleModal(false)}>
        <Text type="callout">123</Text>
      </ActionModal>

      {visibleModal && (
        <AlertError title={'Show Toast'} description={'Show Description'} />
      )}
    </View>
  );
};

export default HomeScreen;
