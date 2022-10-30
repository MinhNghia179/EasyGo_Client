export interface IAddress {
  shortAddress?: string;
  fullAddress?: string;
  lat?: string;
  lng?: string;
}

export interface ILocation {
  lat: number;
  long: number;
  fullAddress?: string;
}

export interface IBooking {
  id_booking: string;
  number: number;
  timer: string;
  id_service: string;
  pick_location: string;
  destination_location: string;
  status: string;
  calPrice: number;
  travelDistance: number;
}

export interface IService {
  id_service: number;
  name: string;
  active: number;
  price: number;
  detail: string;
}
