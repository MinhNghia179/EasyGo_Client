import React, { useState } from 'react';
import { View } from 'react-native';
import styles from '../../../styles/style-sheet';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import GhostButton from '../../../components/Button/GhostButton';
import InputText from '../../../components/Input/InputText';
import { Text } from '../../../components/Text';
import { ILocation } from '../../../interfaces/home-interfaces';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import AddressVisitedRecentlyListing from './AddressVisitedRecentlyListing';

interface IProps {
  onClose?: () => void;
}

const SelectLocationDetailsSection = (props: IProps) => {
  const { onClose } = props;

  const dispatch = useDispatch<IRootDispatch>();

  const [locationList, setLocationList] = useState<ILocation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('');

  const { currentLocation } = useSelector((state: IRootState) => ({
    currentLocation: state.homeStore.currentLocation,
  }));
  const onSearch = async () => {
    setIsLoading(true);
    try {
      const response = await dispatch.homeStore.getCoordinates({
        place: location,
      });
      setLocationList(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSelect = async one => {
    dispatch.homeStore.setDestinationLocation(one);
    onClose();
  };

  return (
    <>
      <View style={[styles.mb_medium]}>
        <View style={[styles.flex_row]}>
          <View style={[styles.mr_small]}>
            <Icon
              name="dot-circle-o"
              size={IconSizes.x_small}
              color={Colors.Blue200}
            />
          </View>
          <Text type="footnote">Current position</Text>
        </View>
        <InputText
          placeholder="To where?"
          backgroundColor={Colors.Grey100}
          style={[styles.mt_small]}
          isValid={!!location}
          showErrorMessage
          errorMessage={['Please select a destination']}
          onPressRightIcon={!!location ? onSearch : undefined}
          rightIcon={
            <Icon
              name="search"
              size={IconSizes.x_small}
              color={Colors.Red200}
            />
          }
          value={location}
          onChange={setLocation}
        />
      </View>
      {isLoading ? (
        <>
          <SkeletonPlaceholder borderRadius={4}>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={30}
                height={30}
                borderRadius={20}
              />
              <SkeletonPlaceholder.Item marginLeft={20}>
                <SkeletonPlaceholder.Item width={120} height={20} />
                <SkeletonPlaceholder.Item
                  marginTop={6}
                  width={90}
                  height={10}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </>
      ) : (
        <AddressVisitedRecentlyListing
          addressList={locationList}
          onSelectAddress={value => console.log(value)}
        />
      )}
      <View style={[styles.flex_row, styles.jus_end]}>
        <GhostButton color={Colors.Red500} onPress={onClose}>
          Cancel
        </GhostButton>
      </View>
    </>
  );
};

export default SelectLocationDetailsSection;
