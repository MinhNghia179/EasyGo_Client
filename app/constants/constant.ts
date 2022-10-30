const Route = {
  APP: 'App',
  NON_AUTH: 'Non auth',
  MAIN_APP: 'MainApp',
  LOGIN: 'login',
  HOME: 'Home',
  CURRENT_LOCATION: 'Current location',
  HOME_DETAIL_SCREEN: 'Home detail screen',

  PAYMENT: 'Payment',
  ACTIVITY: 'Activity',
  ACCOUNT: 'Account',
  MESSAGE: 'Message',
};

export const APP_NAME = 'App đặt xe';

const STEP_DETAILS = {
  PICK_UP_LOCATION: 'PICK_UP_LOCATION',
  SELECT_SERVICE: 'SELECT_SERVICE',
  PAYMENT: 'PAYMENT',
};

export { Route, STEP_DETAILS };

export const INITIAL_ADDRESS = [
  {
    fullAddress: '68 Cầu giấy, Phường Quan Hoa, Quận Cầu Giấy',
    lat: 0,
    long: 0,
  },
  {
    fullAddress: '219 Trung Kính, Phường Yên Hòa',
    lat: 0,
    long: 0,
  },
  {
    fullAddress: '107 Đặng Văn Ngữ, Nam Đồng, Đống Đá',
    lat: 0,
    long: 0,
  },
];
