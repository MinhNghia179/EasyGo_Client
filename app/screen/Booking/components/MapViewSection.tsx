import React from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../redux/root-store';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

const latDelta = 0.025;
const longDelta = 0.025;

const MapViewSection = () => {
  const { createBookingWizard, currentLocation, trackBooking } = useSelector(
    (state: IRootState) => ({
      createBookingWizard: state.bookingStore.createBookingWizard,
      currentLocation: state.authStore.currentLocation,
      trackBooking: state.bookingStore.trackBooking,
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
        {trackBooking && !!trackBooking?.driverPosition && (
          <Marker coordinate={trackBooking?.driverPosition} title="Driver">
            <Icon
              name="motorcycle"
              color={Colors.Red500}
              size={IconSizes.small}
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
