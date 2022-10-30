import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import InputText from '../../components/Input/InputText';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Route } from '../../constants/constant';
import navigationService from '../../navigation/navigation-service';
import { IRootDispatch, IRootState } from '../../redux/root-store';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import AddressVisitedRecentlyListing from './components/AddressVisitedRecentlyListing';
import SelectLocationHeader from './components/SelectLocationHeader';

interface IProps {}

const HomeDetailScreen = (props: IProps) => {
  const {} = props;

  const dispatch = useDispatch<IRootDispatch>();

  const [address, setAddress] = useState<string>('');

  const { AddressVisitedRecently } = useSelector((state: IRootState) => ({
    AddressVisitedRecently: state.homeStore.AddressVisitedRecently,
  }));

  const handleRequestAccess = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    handleRequestAccess();
  }, []);

  return (
    <SafeAreaContainer>
      <SelectLocationHeader
        onPressShowMap={() =>
          navigationService.navigate(Route.CURRENT_LOCATION, {})
        }
      />

      <View style={[styles.p_medium]}>
        <InputText
          style={[styles.shadow]}
          leftIcon={
            <Icon
              name="location-pin"
              size={IconSizes.small}
              color={Colors.Red300}
            />
          }
          placeholder="To where?"
          value={address}
          onChange={setAddress}
        />
      </View>

      <AddressVisitedRecentlyListing addressList={AddressVisitedRecently} />

      <View style={[styles.p_medium]}>
        <Text fontWeight="bold" type="headline">
          Add more ways to move
        </Text>

        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.p_medium,
            styles.rounded,
            styles.mt_medium,
            styles.mb_medium,
            {
              backgroundColor: Colors.Green100,
            },
          ]}>
          <Text type="footnote">Car rental by the hour</Text>
        </TouchableOpacity>

        <View style={[styles.flex_row, styles.jus_between, styles.alg_center]}>
          <Text fontWeight="bold" type="headline">
            Move to favorite places
          </Text>
          <Icon
            name="chevron-with-circle-right"
            color={Colors.Black}
            size={IconSizes.x_small}
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default HomeDetailScreen;
