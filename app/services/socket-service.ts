import Config from 'react-native-config';
import { connect } from 'socket.io-client';
import { SocketEvent } from '../constants/constant';

export const Socket = (userId: string) => {
  const socket = connect(Config.SOCKET_API_URL, {
    transports: ['websocket'],
    jsonp: false,
  });

  socket.on(SocketEvent.CONNECT, function () {
    console.log('Client has connected to the server');
    socket.emit('auth', userId);
  });
  socket.on(SocketEvent.DISCONNECT, function () {
    console.log('The client has disconnected!');
  });

  return socket;
};
