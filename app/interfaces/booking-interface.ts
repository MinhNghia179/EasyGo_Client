import { BookingStatus } from '../enum/booking-enum';
import { IAddress } from './home-interfaces';

export interface IBooking {
  bookingId: string;
}

export interface IOrder {
  userId: string;
  createAt: Date;
  serviceId: string;
  pickUpLocation: IAddress;
  destinationLocation: IAddress;
}

export interface IBookTracking {
  bookingDetails: IBooking;
  status: BookingStatus;
}

export interface ICreateBookingWizard {
  pickUp: IAddress;
  dropOff: IAddress;
  createAt: Date;
  userId: string;
  userName: string;
  serviceId: number;
}
