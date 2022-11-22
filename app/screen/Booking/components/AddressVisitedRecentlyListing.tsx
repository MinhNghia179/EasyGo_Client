import React, { Fragment } from 'react';
import { View } from 'react-native';
import { IAddress } from '../../../interfaces/home-interfaces';
import styles from '../../../styles/style-sheet';
import AddressItem from './AddressItem';

interface IProps {
  addresses?: IAddress[];
}

const AddressVisitedRecentlyListing: React.FC<IProps> = ({ addresses }) => {
  const onSelectAddress = () => {};
  return (
    <View style={[styles.p_medium]}>
      {addresses.map((address, index) => {
        return (
          <Fragment key={index}>
            <AddressItem address={address} onSelectAddress={onSelectAddress} />
          </Fragment>
        );
      })}
    </View>
  );
};

export default AddressVisitedRecentlyListing;
