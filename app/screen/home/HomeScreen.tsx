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
import Select from '../../components/Select/SelectInput';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions } from 'react-native';

const LATITUDE = 21.02593;
const LONGITUDE = 105.81327;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

interface IProps {}

const HomeScreen = (props: IProps) => {
  const {} = props;

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
    <SafeAreaContainer onRefresh={onRefresh} refreshing={refresh}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          height: 700,
        }}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}></MapView>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
