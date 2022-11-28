import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { Text } from '../../components/Text';
import { SafeAreaContainer } from '../../components/View';
import { Colors } from '../../styles/colors';

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

  return (
    <SafeAreaContainer
      contentType="view"
      headerBordered={false}
      title="Home"
      backgroundColor={Colors.Grey000}>
      <Text>App Stack</Text>
    </SafeAreaContainer>
  );
};

export default HomeDetailScreen;
