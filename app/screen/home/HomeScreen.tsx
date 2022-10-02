import React, { useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-root-toast';
import { ActionModal, BottomSheetModal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

interface IProps {}

const HomeScreen = (props: IProps) => {
  const {} = props;

  const [loading, setLoading] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const _onNavigateScreen = () => {};

  const _onSubmitButton = (name: string) => {
    setLoading(true);
    setLoading(false);
  };

  const _onClick = () => {
    Toast.show('Hello');
  };

  return (
    <SafeAreaContainer title="Finance Export" left="Left" right="Right">
      <View style={[styles.mb_x2_large, styles.p_small]}>
        <View style={[styles.mb_medium]}>
          <Text
            type="callout"
            color={Colors.Black}
            textAlign="center"
            fontWeight="bold">
            Demo UI
          </Text>
        </View>

        <BottomSheetModal
          isVisible
          hasDivider
          title="Bottom Sheet Modal"
          description="hello">
          <Text color={Colors.Text.Primary}>Hello Bottom Sheet Modal</Text>
        </BottomSheetModal>

        <ActionModal isVisible title="Action Modal">
          <Text>Action Modal</Text>
        </ActionModal>
      </View>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
