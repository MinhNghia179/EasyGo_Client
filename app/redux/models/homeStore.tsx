import { IAddress } from '../../interfaces/home-interfaces';

export interface IHomeStore {
  AddressVisitedRecently: IAddress[];
}

const initialState: IHomeStore = {
  AddressVisitedRecently: [
    {
      shortAddress: '68 Cầu Giấy',
      fullAddress: '68 Cầu giấy, Phường Quan Hoa, Quận Cầu Giấy',
      lat: '',
      lng: '',
    },
    {
      shortAddress: '219 Trung Kính',
      fullAddress: '219 Trung Kính, Phường Yên Hòa',
      lat: '',
      lng: '',
    },
    {
      shortAddress: '107 Đặng Văn Ngữ',
      fullAddress: '107 Đặng Văn Ngữ, Nam Đồng, Đống Đá',
      lat: '',
      lng: '',
    },
  ],
};

const homeStore = {
  state: initialState,
  reducers: {},
  effects: dispatch => ({}),
};

export default homeStore;
