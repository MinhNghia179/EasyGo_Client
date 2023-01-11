import { connect } from 'socket.io-client';
import { SOCKET_API_URL } from '../variables/app-config';

export const Socket = (data: string) => {
  const socket = connect(SOCKET_API_URL, {
    transports: ['websocket'],
  });

  return socket;
};
