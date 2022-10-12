import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Avatar } from '../../components/Avatar';
import PrimaryButton from '../../components/Button/PrimaryButton';
import CardItem from '../../components/Card/CardItem';
import Checkbox from '../../components/Checkbox/Checkbox';
import InputText from '../../components/Input/InputText';
import { BottomSheetModal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

interface IProps {}

const HomeScreen = (props: IProps) => {
  const {} = props;

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('nguyenminhnghia.thd@gmail.com');
  const [visibleModal, setVisibleModal] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
            Design System
          </Text>
          <View style={[{ padding: 12, borderWidth: 1, borderColor: 'red' }]}>
            <Text>123</Text>
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

        <CardItem
          description="Password"
          label="123456Aa@"
          onPress={() => setVisibleModal(true)}
          style={[styles.mt_medium]}
          hasBorderRadius
          hasShadow
          rightIconName="right">
          <Text>Card Item 1</Text>
        </CardItem>

        <Text>Avatar</Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => console.log('Touch')}>
          <Avatar
            imageSize={40}
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            position="bottom-left"
            icon={<Icon name="pencil" size={15} />}
          />
        </TouchableOpacity>

        <Text>Checkbox</Text>

        <View>
          <Checkbox
            label="Account and password "
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />

          <Checkbox
            label="Account and password "
            checked={isChecked}
            checkedColor={Colors.Green600}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Checkbox
            label="Account and password "
            checked={isChecked}
            checkedColor={Colors.Red700}
            onPress={() => setIsChecked(!isChecked)}
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
