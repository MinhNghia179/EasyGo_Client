import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-root-toast';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useSelector } from 'react-redux';
import GhostButton from '../../../components/Button/GhostButton';
import InputText from '../../../components/Input/InputText';
import { ActionModal } from '../../../components/Modal';
import { IRootState } from '../../../redux/root-store';
import { autoSuggestLocationBySearchName } from '../../../services/google-map-service';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchAddressModal = (props: IProps) => {
  const { isOpen, onClose } = props;

  const { currentLocation } = useSelector(
    (state: IRootState) => state.authStore,
  );

  const [searchText, setSearchText] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [addressList, setAddressList] = useState<{ [key: string]: string }[]>(
    [],
  );

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
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const debounceSearch = useCallback(debounce(searchLocation, 500), []);

  const handleOnChange = (value: string) => {
    setSearchText(value);
    debounceSearch(value);
  };

  return (
    <ActionModal isVisible={isOpen} title="Search address">
      <InputText value={searchText} onChange={handleOnChange} />
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
        <></>
      )}
      <View style={[styles.flex_row, styles.jus_end, styles.mt_medium]}>
        <GhostButton color={Colors.Red300} onPress={onClose}>
          Cancel
        </GhostButton>
      </View>
    </ActionModal>
  );
};

export default SearchAddressModal;
