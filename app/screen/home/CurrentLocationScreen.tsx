import Geolocation from '@react-native-community/geolocation';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import { SafeAreaContainer } from '../../components/View';

interface IProps {
  navigation: StackNavigationProp<any, 'Home'>;
}

const CurrentLocationScreen = (props: IProps) => {
  const { navigation } = props;

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    }),
      { enableHighAccuracy: false, timeout: 20000 };
  }, []);

  return <SafeAreaContainer></SafeAreaContainer>;
};

export default CurrentLocationScreen;
