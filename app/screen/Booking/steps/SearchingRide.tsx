import React from 'react';
import { Image, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useSelector } from 'react-redux';
import socketIO from 'socket.io-client';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { Text } from '../../../components/Text';
import { IRootState } from '../../../redux/root-store';
import { wp } from '../../../services/response-screen-service';
import { Colors } from '../../../styles/colors';
import styles from '../../../styles/style-sheet';
import { SOCKET_API_URL } from '../../../variables/app-config';

interface IProps {}

const SearchingRide = (props: IProps) => {
  const { portalUser } = useSelector((state: IRootState) => ({
    portalUser: state.authStore.portalUser,
  }));

  const socket = socketIO(SOCKET_API_URL, {
    transports: ['websocket'],
    jsonp: false,
  });

  const handleConnectSocket = () => {
    socket.connect();
    socket.on('connect', function () {
      console.log('connected to socket server');
      socket.emit('auth', portalUser.id);
    });
    socket.on('disconnect', function () {
      console.log('The client has disconnected!');
    });
    console.log(socket);
  };

  const handleGetMessage = () => {
    console.log(socket.on('chatmsg', data => console.log(data)));
  };

  const handleChatMessage = () => {
    socket.emit('chatmsg', 'Hello Minh Nghĩa');
  };

  return (
    <>
      <View style={[styles.flex_row, styles.alg_center, styles.jus_between]}>
        <Image
          style={[
            {
              width: wp(150),
              height: wp(150),
            },
          ]}
          source={require('../../../assets/image/icon_driver.gif')}
        />
        <View
          style={[
            {
              flexShrink: 1,
            },
          ]}>
          <Text fontWeight="bold" type="subhead">
            Searching Ride
          </Text>
          <Text type="footnote" color={Colors.Text.GreySecondary}>
            Looking for the nearest driver for you. It may take some times...
          </Text>
        </View>
      </View>
      <View style={[styles.pv_small]}>
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item height={10} />
        </SkeletonPlaceholder>
      </View>
      <PrimaryButton onPress={handleConnectSocket}>
        Connect Socket
      </PrimaryButton>
      <PrimaryButton onPress={handleChatMessage}>Chat Msg</PrimaryButton>
      <PrimaryButton onPress={handleGetMessage}>Get Msg</PrimaryButton>
    </>
  );
};

export default SearchingRide;
