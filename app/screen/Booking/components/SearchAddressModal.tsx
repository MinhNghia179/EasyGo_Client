import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import Toast from 'react-native-root-toast';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import GhostButton from '../../../components/Button/GhostButton';
import InputText from '../../../components/Input/InputText';
import { ActionModal } from '../../../components/Modal';
import { Text } from '../../../components/Text';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import {
  autoSuggestLocationBySearchName,
  getCurrentLocationByName,
} from '../../../services/google-map-service';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchAddressModal = (props: IProps) => {
  const { isOpen, onClose } = props;
  const dispatch = useDispatch<IRootDispatch>();
  const { currentLocation, createBookingWizard } = useSelector(
    (state: IRootState) => ({
      currentLocation: state.authStore.currentLocation,
      createBookingWizard: state.bookingStore.createBookingWizard,
    }),
  );
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [addressList, setAddressList] = useState<{ [key: string]: string }[]>(
    [],
  );

  const handleOnClose = () => {
    setSearchText('');
    setAddressList([]);
    onClose();
  };

  const searchLocation = async (value: string) => {
    setIsLoading(true);
    try {
      const response = await autoSuggestLocationBySearchName({
        addressName: value,
        userLocation: currentLocation.location,
      });
      setAddressList(response);
    } catch (error) {
      Toast.show(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnSelect = async (name: string) => {
    try {
      const response = await getCurrentLocationByName({ name });
      const payload = {
        ...createBookingWizard,
        pickUp: currentLocation,
        dropOff: response,
      };
      dispatch.bookingStore.setCreateBookingWizard(payload);
      handleOnClose();
    } catch (error) {
      Toast.show(error.message);
    }
  };

  const debounceSearch = useCallback(debounce(searchLocation, 500), []);

  const handleOnChange = (value: string) => {
    setSearchText(value);
    debounceSearch(value);
  };

  return (
    <ActionModal
      onClose={handleOnClose}
      isVisible={isOpen}
      title="Search address">
      <InputText
        value={searchText}
        onChange={handleOnChange}
        placeholder="search on google map"
        leftIcon={
          <Icon name="search" size={IconSizes.small} color={Colors.Black} />
        }
      />
      <Divider style={[styles.mv_small]} />
      {isLoading ? (
        <View style={[styles.mv_small]}>
          <SkeletonPlaceholder borderRadius={4}>
            <SkeletonPlaceholder.Item flexDirection="column">
              <SkeletonPlaceholder.Item width={300} height={20} />
              <SkeletonPlaceholder.Item width={300} height={20} marginTop={5} />
              <SkeletonPlaceholder.Item width={150} height={20} marginTop={5} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </View>
      ) : (
        <FlatList
          data={addressList}
          keyExtractor={(
            item: { shortAddress?: string; fullAddress?: string },
            index,
          ) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOnSelect(item.fullAddress)}>
              <View style={[styles.flex_row, styles.alg_center]}>
                <View
                  style={[
                    styles.rounded_full,
                    styles.flex_row,
                    styles.jus_center,
                    styles.alg_center,
                    {
                      width: wp(18),
                      height: wp(18),
                      backgroundColor: Colors.Green500,
                    },
                  ]}>
                  <Icon
                    name="location"
                    size={IconSizes.x2_small}
                    color={Colors.White}
                  />
                </View>
                <View
                  style={[
                    styles.flex_col,
                    styles.ml_small,
                    styles.pv_small,
                    {
                      flexShrink: 1,
                    },
                  ]}>
                  {!!item?.shortAddress && (
                    <Text fontWeight="bold" type="caption1">
                      {item.shortAddress}
                    </Text>
                  )}
                  <Text type="caption1" numberOfLines={1}>
                    {item?.fullAddress}
                  </Text>
                </View>
              </View>
              <Divider />
            </TouchableOpacity>
          )}
        />
      )}
      <View style={[styles.flex_row, styles.jus_end, styles.mt_medium]}>
        <GhostButton color={Colors.Red300} onPress={handleOnClose}>
          Cancel
        </GhostButton>
      </View>
    </ActionModal>
  );
};

export default SearchAddressModal;
