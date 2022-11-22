import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { SafeAreaContainer } from '../../components/View';

interface IProps {}

const HomeDetailScreen = (props: IProps) => {
  const {} = props;

  const handleRequestAccess = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    handleRequestAccess();
  }, []);

  return <SafeAreaContainer></SafeAreaContainer>;
};

export default HomeDetailScreen;
