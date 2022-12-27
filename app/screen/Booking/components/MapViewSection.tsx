import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Text } from '../../../components/Text';
import { IRootState } from '../../../redux/root-store';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

const latDelta = 0.025;
const longDelta = 0.025;

const MapViewSection = () => {
  const { createBookingWizard, currentLocation } = useSelector(
    (state: IRootState) => ({
      createBookingWizard: state.bookingStore.createBookingWizard,
      currentLocation: state.authStore.currentLocation,
    }),
  );

  const initialRegion = {
    latitude: currentLocation?.location?.latitude || 21.030813822253087,
    longitude: currentLocation?.location?.longitude || 105.7994291596386,
    latitudeDelta: latDelta,
    longitudeDelta: longDelta,
  };

  return (
    <View style={[styles.flex_1]}>
      <MapView
        zoomEnabled
        zoomControlEnabled
        region={initialRegion}
        style={[styles.flex_1]}>
        {createBookingWizard && createBookingWizard?.pickUp && (
          <Marker
            coordinate={createBookingWizard?.pickUp?.location}
            title={createBookingWizard?.pickUp?.shortAddress}
            description={createBookingWizard?.pickUp?.fullAddress}>
            <Icon
              name="my-location"
              color={Colors.Blue300}
              size={IconSizes.x_small}
            />
          </Marker>
        )}
        {createBookingWizard && !!createBookingWizard?.dropOff && (
          <Marker
            coordinate={createBookingWizard?.dropOff?.location}
            title={createBookingWizard?.dropOff?.shortAddress}
            description={createBookingWizard?.dropOff?.fullAddress}>
            <Icon
              name="location-searching"
              color={Colors.Red500}
              size={IconSizes.x_small}
            />
          </Marker>
        )}
        {createBookingWizard &&
          !!createBookingWizard?.dropOff &&
          !!createBookingWizard?.pickUp && (
            <Polyline
              coordinates={createBookingWizard?.routeInfo?.routes || []}
              strokeColor={Colors.Green}
              strokeWidth={3}
            />
          )}
      </MapView>
    </View>
  );
};

export default MapViewSection;
