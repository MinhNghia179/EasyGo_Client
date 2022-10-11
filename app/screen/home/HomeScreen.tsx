import React, { useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-root-toast';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { ActionModal, BottomSheetModal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import Icon from 'react-native-vector-icons/EvilIcons';
import InputText from '../../components/Input/InputText';
import IconSizes from '../../styles/icon-size';
import CardItem from '../../components/Card/CardItem';

interface IProps {}

const HomeScreen = (props: IProps) => {
  const {} = props;

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('nguyenminhnghia.thd@gmail.com');
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
    <SafeAreaContainer title="Finance Export" hasDivider>
      <View style={[styles.mb_x2_large, styles.p_small]}>
        <View style={[styles.mb_medium]}>
          <Text
            type="callout"
            color={Colors.Black}
            textAlign="center"
            fontWeight="bold">
            Demo UI 123
          </Text>
          <View style={[{ padding: 12, borderWidth: 1, borderColor: 'red' }]}>
            123
          </View>
        </View>

        <PrimaryButton onPress={() => setVisibleModal(true)}>
          Show bottom sheet modal
        </PrimaryButton>

        <BottomSheetModal
          isVisible={visibleModal}
          hasDivider
          onClose={() => setVisibleModal(false)}
          title="Bottom Sheet Modal"
          description="hello">
          <Text color={Colors.Text.Primary}>Hello Bottom Sheet Modal</Text>
        </BottomSheetModal>

        <InputText
          style={[styles.mt_large]}
          isValid
          label="Password"
          value={email}
          autoCapitalize="characters"
          onChange={setEmail}
        />

        <InputText
          style={[styles.mt_large]}
          isValid={false}
          showErrorMessage
          label="Password"
          value={email}
          autoCapitalize="characters"
          onChange={setEmail}
          errorMessage={[
            'Please enter your password ',
            'Invalid token verify',
            'Please confirm your password',
          ]}
        />
        <CardItem>
          <Text>Card Item</Text>
        </CardItem>
      </View>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
