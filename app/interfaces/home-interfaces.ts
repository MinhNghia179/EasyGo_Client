export interface IAddress {
  shortAddress?: string;
  fullAddress?: string;
  lat?: string;
  lng?: string;
}

export interface ILocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
