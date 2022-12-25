export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IAddress {
  shortAddress?: string;
  fullAddress?: string;
  location?: ICoordinates;
}

export interface IRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
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
  id: number;
  describe: string;
  price: number;
  name: string;
  createdAt: any;
}
