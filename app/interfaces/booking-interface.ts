import { IAddress, ICoordinates } from './home-interfaces';

export interface IOrder {
  userId: string;
  createAt: Date;
  serviceId: string;
  pickUpLocation: IAddress;
  destinationLocation: IAddress;
}

export interface IRouteInfo {
  travelDistance: number;
  travelDuration: number;
  travelDurationTraffic: number;
  routes: ICoordinates[];
}

export interface ICreateBookingWizard {
  pickUp: IAddress;
  dropOff: IAddress;
  createAt: Date;
  userId: string;
  userName: string;
  serviceId: string;
  routeInfo: IRouteInfo;
  notes: string;
  totalPrice: number;
}

export interface ITrackBooking {
  bookingInfo: any;
  driverPosition: ICoordinates;
  driverInfo: any;
}
