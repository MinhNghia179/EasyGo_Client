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
