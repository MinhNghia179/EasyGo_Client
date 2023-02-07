import { isEmpty } from 'lodash';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { POSITION_TYPE } from '../../../enum/booking-enum';
import { ICoordinates } from '../../../interfaces/home-interfaces';
import { IRootDispatch, IRootState } from '../../../redux/root-store';
import {
  getCurrentLocationByCoordinates,
  getRoutes,
} from '../../../services/google-map-service';
import { Colors } from '../../../styles/colors';
import IconSizes from '../../../styles/icon-size';
import styles from '../../../styles/style-sheet';

const latDelta = 0.025;
const longDelta = 0.025;

const MapViewSection = () => {
  const mapRef = useRef(null);
  const dispatch = useDispatch<IRootDispatch>();

  const { createBookingWizard, currentLocation, driverPosition } = useSelector(
    (state: IRootState) => ({
      createBookingWizard: state.bookingStore.createBookingWizard,
      currentLocation: state.authStore.currentLocation,
      driverPosition: state.bookingStore.driverPosition,
    }),
  );

  const initialRegion = {
    latitude: currentLocation?.location?.latitude || 21.030813822253087,
    longitude: currentLocation?.location?.longitude || 105.7994291596386,
    latitudeDelta: latDelta,
    longitudeDelta: longDelta,
  };

  const handleDragAndDropPosition = async (
    coordinates: ICoordinates,
    type: POSITION_TYPE,
  ) => {
    dispatch.bookingStore.setIsSearchingLocation(true);
    try {
      const address = await getCurrentLocationByCoordinates(coordinates);
      if (!isEmpty(address)) {
        let payload = {};
        if (type === POSITION_TYPE.PICK_UP) {
          payload = {
            pickUp: address,
            routeInfo: await handleGetRoutes(
              address.location,
              createBookingWizard?.dropOff.location,
            ),
          };
        } else {
          payload = {
            dropOff: address,
            routeInfo: await handleGetRoutes(
              createBookingWizard?.pickUp.location,
              address.location,
            ),
          };
        }
        dispatch.bookingStore.setCreateBookingWizard({
          ...createBookingWizard,
          ...payload,
        });
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
      });
    } finally {
      dispatch.bookingStore.setIsSearchingLocation(false);
    }
  };

  const handleGetRoutes = async (
    pickup: ICoordinates,
    dropOff: ICoordinates,
  ) => {
    try {
      return await getRoutes({
        pickup,
        dropOff,
      });
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Lỗi!',
        textBody: 'Rất tiếc, đã xảy ra lỗi! Vui lòng thử lại.',
      });
    }
  };

  return (
    <View style={[styles.flex_1]}>
      <MapView
        ref={mapRef}
        zoomEnabled
        showsMyLocationButton
        showsUserLocation
        rotateEnabled
        provider={PROVIDER_GOOGLE}
        zoomControlEnabled
        region={initialRegion}
        style={[styles.flex_1]}>
        {createBookingWizard && createBookingWizard?.pickUp && (
          <Marker
            draggable
            onDragEnd={e =>
              handleDragAndDropPosition(
                e.nativeEvent.coordinate,
                POSITION_TYPE.PICK_UP,
              )
            }
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
            draggable
            onDragEnd={e =>
              handleDragAndDropPosition(
                e.nativeEvent.coordinate,
                POSITION_TYPE.DROP_OFF,
              )
            }
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

        {!!driverPosition && (
          <Marker coordinate={driverPosition} title="Vị trí tài xế">
            <Icon
              name="motorcycle"
              color={Colors.Red500}
              size={IconSizes.small}
            />
          </Marker>
        )}
      </MapView>
    </View>
  );
};

export default MapViewSection;
