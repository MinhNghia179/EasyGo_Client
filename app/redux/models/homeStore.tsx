import { IAddress, ICoordinates } from '../../interfaces/home-interfaces';
import apiClient from '../../services/api-client';

export interface IHomeStore {
  AddressVisitedRecently: IAddress[];
  currentLocation: IAddress;
}

const initialState: IHomeStore = {
  AddressVisitedRecently: [
    {
      shortAddress: '68 Cầu Giấy',
      fullAddress: '68 Cầu giấy, Phường Quan Hoa, Quận Cầu Giấy',
    },
    {
      shortAddress: '219 Trung Kính',
      fullAddress: '219 Trung Kính, Phường Yên Hòa',
    },
    {
      shortAddress: '107 Đặng Văn Ngữ',
      fullAddress: '107 Đặng Văn Ngữ, Nam Đồng, Đống Đá',
    },
  ],
  currentLocation: null,
};

const homeStore = {
  state: initialState,
  reducers: {
    setCurrentLocation: (state: IHomeStore, payload) => ({
      ...state,
      currentLocation: payload,
    }),
  },
  effects: dispatch => ({
    async getCurrentLocationName(payload: ICoordinates): Promise<void> {
      try {
        const response = await apiClient.post(
          `/maps/point_name?lat=${payload.latitude}&lon=${payload.longitude}`,
        );
        dispatch.homeStore.setCurrentLocation({
          ...payload,
          fullAddress: response.data.name,
        });
      } catch (error) {
        throw error;
      }
    },
    async getCoordinates(payload) {
      try {
        const response = await apiClient.post(`/maps/point`, payload);
        if (response.status === 200) {
          const lat = response.data.coordinates[0];
          const long = response.data.coordinates[1];
          const res = await apiClient.post(
            `/maps/point_name?lat=${lat}&lon=${long}`,
          );
          return [{ lat, long, fullAddress: res.data.name }];
        }
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default homeStore;
