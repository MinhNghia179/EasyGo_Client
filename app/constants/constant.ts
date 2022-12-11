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
};
