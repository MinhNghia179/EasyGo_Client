import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

const latDelta = 0.025;
const longDelta = 0.025;

const initialRegion = {
  latitude: 21.032376023306423,
  longitude: 105.81685278927037,
  latitudeDelta: latDelta,
  longitudeDelta: longDelta,
};

const MapViewSection = () => {
  const { createBookingWizard, currentLocation } = useSelector(
    (state: IRootState) => ({
      createBookingWizard: state.bookingStore.createBookingWizard,
      currentLocation: state.authStore.currentLocation,
    }),
  );

  return (
    <View style={[styles.flex_1]}>
      <MapView region={initialRegion} style={[styles.flex_1]}>
        {currentLocation && currentLocation?.location && (
          <Marker
            coordinate={currentLocation?.location}
            title={currentLocation?.shortAddress}
            description={currentLocation?.fullAddress}>
            <Icon
              name="my-location"
              color={Colors.Blue300}
              size={IconSizes.x_small}
            />
          </Marker>
        )}
        {!!createBookingWizard && !!createBookingWizard?.dropOff && (
          <Marker
            coordinate={createBookingWizard?.dropOff?.location}
            title={createBookingWizard?.dropOff?.shortAddress}
            description={createBookingWizard?.dropOff?.fullAddress}>
            <Icon
              name="my-location"
              color={Colors.Blue300}
              size={IconSizes.x_small}
            />
          </Marker>
        )}
      </MapView>
    </View>
  );
};

export default MapViewSection;
