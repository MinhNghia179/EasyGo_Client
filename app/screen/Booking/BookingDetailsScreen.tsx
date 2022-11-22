import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import InputText from '../../components/Input/InputText';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';
import IconSizes from '../../styles/icon-size';
import styles from '../../styles/style-sheet';
import AddressVisitedRecentlyListing from './components/AddressVisitedRecentlyListing';
import BookingOverviewHeader from './components/BookingOverviewHeader';
import OtherMethodSection from './components/OtherMethodSection';

interface IProps {}

const BookingDetailsScreen: React.FC<IProps> = ({}) => {
  const [address, setAddress] = useState<string>('');

  return (
    <SafeAreaContainer>
      <BookingOverviewHeader />
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
      <AddressVisitedRecentlyListing />
      <OtherMethodSection />
    </SafeAreaContainer>
  );
};

export default BookingDetailsScreen;
