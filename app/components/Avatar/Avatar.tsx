import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

interface IProps {
  imageUrl?: string;
  size?: 'small' | 'medium' | 'large ' | number;
}

export const Avatar = (props: IProps) => {
  const { imageUrl } = props;

  return (
    <View style={[]}>
      <View style={[]}>
        <FastImage
          style={{ width: 200, height: 200 }}
          source={{ uri: imageUrl }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  );
};
