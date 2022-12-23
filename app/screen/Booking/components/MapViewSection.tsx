import React, { useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import { getRoutes } from '../../../services/google-map-service';
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
  const dispatch = useDispatch<IRootDispatch>();
  const { createBookingWizard } = useSelector((state: IRootState) => ({
    createBookingWizard: state.bookingStore.createBookingWizard,
  }));

  const getRoutesForBooking = async () => {
    try {
      const response = await getRoutes({
        pickup: createBookingWizard?.pickUp?.location,
        dropOff: createBookingWizard?.dropOff?.location,
      });
      dispatch.bookingStore.setCreateBookingWizard({
        ...createBookingWizard,
        routeInfo: response,
      });
    } catch (error) {
      Toast.show(error);
    }
  };

  useEffect(() => {
    getRoutesForBooking();
  }, [createBookingWizard?.dropOff]);

  return (
    <View style={[styles.flex_1]}>
      <MapView
        zoomEnabled
        zoomControlEnabled
        region={initialRegion}
        style={[styles.flex_1]}>
        {!!createBookingWizard && createBookingWizard?.pickUp && (
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
        {!!createBookingWizard && !!createBookingWizard?.dropOff && (
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
        {!!createBookingWizard &&
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
