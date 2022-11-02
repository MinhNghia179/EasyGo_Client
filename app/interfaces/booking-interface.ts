import { BookingStatus } from '../enum/booking-enum';

export interface IBooking {}

export interface IBookTracking {
  bookingDetails: IBooking;
  status: BookingStatus;
}
