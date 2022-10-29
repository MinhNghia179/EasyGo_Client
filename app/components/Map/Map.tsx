import React, { useEffect } from 'react';
import { Dimensions, PermissionsAndroid, View } from 'react-native';
import BingMapsView from 'react-native-bing-maps';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';
import { ILocation } from '../../interfaces/home-interfaces';
import { IRootDispatch } from '../../redux/root-store';
import styles from '../../styles/style-sheet';
import { GOOGLE_API_KEY } from '../../variables/app-config';

const { width, height } = Dimensions.get('window');

interface IProps {
  location?: ILocation;
  zoom?: number;
}

const BingMap = (props: IProps) => {
  const { location, zoom = 15 } = props;

  const dispatch = useDispatch<IRootDispatch>();

  const getCurrentLocation = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    await Geolocation.getCurrentPosition(
      position => {
        dispatch.homeStore.getCurrentLocationName({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 10000,
        distanceFilter: 1,
      },
    );
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={[styles.jus_center, styles.alg_center, styles.flex_1]}>
      <BingMapsView
        credentialsKey={GOOGLE_API_KEY}
        buildingsVisible={false}
        transitFeaturesVisible
        businessLandmarksVisible
        compassButtonVisible
        tiltButtonVisible
        zoomButtonsVisible
        copyrightDisplay="always"
        mapLocation={{ lat: location.lat, long: location.long, zoom: zoom }}
        style={{ height, width, marginVertical: 20 }}
      />
    </View>
  );
};

export default BingMap;
