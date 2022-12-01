import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import BingMapsView, { BingMapsProps } from 'react-native-bing-maps';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';
import { ILocation } from '../../interfaces/home-interfaces';
import { IRootDispatch } from '../../redux/root-store';
import { GOOGLE_API_KEY } from '../../variables/app-config';

const iconSVG =
  '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="orange" stroke="none"><path d="M235 627 c-62 -21 -97 -42 -139 -84 -123 -121 -123 -324 0 -447 123 -123 325 -123 448 0 123 123 123 325 0 448 -77 77 -215 114 -309 83z"/></g></svg>';

const { width, height } = Dimensions.get('window');

interface IProps extends BingMapsProps {
  location?: ILocation;
  zoom?: number;
  routes?: any;
}

const BingMap = (props: IProps) => {
  const { location, zoom = 15, routes } = props;

  const dispatch = useDispatch<IRootDispatch>();

  const lat = location?.lat || 21.040995;
  const long = location?.long || 105.817583;

  const getCurrentLocation = async () => {
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
    <BingMapsView
      credentialsKey={GOOGLE_API_KEY}
      buildingsVisible={false}
      transitFeaturesVisible
      businessLandmarksVisible
      compassButtonVisible
      tiltButtonVisible
      zoomButtonsVisible
    />
  );
};

export default BingMap;
