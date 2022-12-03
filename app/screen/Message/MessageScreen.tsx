import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Avatar } from '../../components/Avatar';
import PrimaryButton from '../../components/Button/PrimaryButton';
import CardItem from '../../components/Card/CardItem';
import Checkbox from '../../components/Checkbox/Checkbox';
import InputText from '../../components/Input/InputText';
import { BottomSheetModal } from '../../components/Modal';
import Select from '../../components/Select/SelectInput';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

const LATITUDE = 21.02593;
const LONGITUDE = 105.81327;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const MessageScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('nguyenminhnghia.thd@gmail.com');
  const [visibleModal, setVisibleModal] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];

  const _onNavigateScreen = () => {};

  const _onSubmitButton = (name: string) => {
    setLoading(true);
    setLoading(false);
  };

  const _onClick = () => {
    Toast.show('Hello');
  };

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    wait(1000).then(() => setRefresh(false));
  }, []);
  return (
    <SafeAreaContainer
      title="Finance Export"
      onRefresh={onRefresh}
      refreshing={refresh}>
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

        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            height: 300,
          }}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}></MapView>

        <PrimaryButton
          style={[styles.mt_medium]}
          onPress={() => setVisibleModal(true)}>
          Show bottom sheet modal
        </PrimaryButton>

        <Select label="Select service" data={data} onSelect={setSelected} />

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

        <Text>Select Option: Done</Text>
      </View>
    </SafeAreaContainer>
  );
};

export default MessageScreen;
