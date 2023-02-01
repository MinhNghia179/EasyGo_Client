const Route = {
  APP: 'App',
  HOME_STACK: 'HomeStack',
  BOOKING_STACK: 'BookingStack',
  LOGIN_STACK: 'LoginStack',
  ACCOUNT_STACK: 'AccountStack',
  PAYMENT_STACK: 'PaymentStack',
  ACTIVITY_STACK: 'ActivityStack',
  MESSAGE_STACK: 'MessageStack',
  COVER_APP_STACK: 'CoverAppStack',
};

const HomeStackRoute = {
  DASHBOARD: 'Dashboard',
};
const BookingStackRoute = {
  CREATE_BOOKING_GUID: 'CreateBookingGuid',
  BOOKING_DETAILS: 'BookingDetails',
  CANCEL_TRIP: 'CancelTrip',
  FINISH_BOOKING: 'FinishBooking',
  RATE_DRIVER: 'RateDriver',
};
const LoginStackRoute = {
  LOGIN: 'Login',
  FORGOT_PASSWORD: 'ForgotPassword',
};
const AccountStackRoute = {
  DASHBOARD: 'Dashboard',
};
const PaymentStackRoute = {
  DASHBOARD: 'Dashboard',
  ADD_NEW_CARD: 'AddNewCard',
  CHOOSE_PAYMENT_METHOD: 'ChoosePaymentMethod',
};
const ActivityStackRoute = {
  DASHBOARD: 'Dashboard',
};
const MessageStackRoute = {
  DASHBOARD: 'Dashboard',
};
const CoverAppRoute = {
  INTRO: 'INTRO',
};

const STEP_DETAILS = {
  PICK_UP_LOCATION: 'PICK_UP_LOCATION',
  SELECT_SERVICE: 'SELECT_SERVICE',
  PAYMENT: 'PAYMENT',
};

const SocketEvent = {
  AUTH: 'auth',
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  SEND_BOOKING: 'send_booking',
  SEND_DRIVER_INFO: 'send_driver',
  CANCEL_BOOKING: 'cancel_booking',
  FINISH_BOOKING: 'finish_booking',
  TRACK: 'track',
};

const BookingStatus = {
  CREATED: 'CREATED',
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT',
  SUCCESS: 'SUCCESS',
};

export {
  Route,
  STEP_DETAILS,
  HomeStackRoute,
  BookingStackRoute,
  LoginStackRoute,
  AccountStackRoute,
  PaymentStackRoute,
  ActivityStackRoute,
  MessageStackRoute,
  CoverAppRoute,
  SocketEvent,
  BookingStatus,
};
