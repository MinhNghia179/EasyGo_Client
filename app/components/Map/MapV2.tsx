import { View } from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '../../variables/app-config';

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
export const MapV2 = () => (
  <MapView
    provider={PROVIDER_GOOGLE}
    style={{
      height: 300,
      width: '100%',
    }}
    region={{
      latitude: 21.038664,
      longitude: 105.80425,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }}>
    <Marker coordinate={{ latitude: 21.038664, longitude: 105.80425 }} />
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={GOOGLE_API_KEY}
    />
  </MapView>
);
