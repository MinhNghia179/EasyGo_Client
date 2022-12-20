import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from '../../../styles/style-sheet';

interface IProps {}

// Point pick up location, drop off location
// Routes

const MapViewSection = (props: IProps) => {
  return (
    <View style={[styles.flex_1]}>
      <MapView style={[styles.flex_1]} />
    </View>
  );
};

export default MapViewSection;
