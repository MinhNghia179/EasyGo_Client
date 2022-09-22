import React, { useState } from 'react';
import { Button, Dimensions, View } from 'react-native';
import Toast from 'react-native-root-toast';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { APP_NAME } from '../../constants/constant';
import { Colors } from '../../styles/colors';
import styles from '../../styles/style-sheet';

const DimensionWidthDevice = Dimensions.get('window').width;
const DimensionHeightDevice = Dimensions.get('window').height;

interface IProps {}

const HomeScreen = (props: IProps) => {
  const {} = props;

  const [loading, setLoading] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const _onNavigateScreen = () => {};

  const _onSubmitButton = (name: string) => {
    setLoading(true);
    setLoading(false);
  };

  const _onClick = () => {
    Toast.show('Hello');
  };

  return (
    <SafeAreaContainer title="Finance Export" left="Left" right="Right">
      <View style={[styles.mb_x2_large]}>
        <Text
          type="callout"
          color={Colors.Black}
          textAlign="center"
          fontWeight="bold">
          {APP_NAME}
        </Text>
        <Button title="Action" onPress={() => {}} />
      </View>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
