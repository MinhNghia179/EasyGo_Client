import React from 'react';
import { Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaContainer } from '../../../components/View';

const LATITUDE = 21.02593;
const LONGITUDE = 105.81327;

const ShowMap = () => {
  return (
    <SafeAreaContainer>
      <MapView
        onMapLoaded={() => console.log('Map Loaded')}
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        loadingEnabled
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        followsUserLocation
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}></MapView>
    </SafeAreaContainer>
  );
};

export default ShowMap;
