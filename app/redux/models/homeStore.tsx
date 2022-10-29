import { INITIAL_ADDRESS } from '../../constants/constant';
import { IAddress, ILocation } from '../../interfaces/home-interfaces';
import apiClient from '../../services/api-client';

export interface IHomeStore {
  AddressVisitedRecently: IAddress[];
  currentLocation: ILocation;
  isLoading: boolean;
}

const initialState: IHomeStore = {
  AddressVisitedRecently: INITIAL_ADDRESS,
  currentLocation: null,
  isLoading: false,
};

const homeStore = {
  state: initialState,
  reducers: {
    setCurrentLocation: (state: IHomeStore, payload) => ({
      ...state,
      currentLocation: payload,
    }),
    setIsLoading: (state: IHomeStore, payload) => ({
      ...state,
      isLoading: payload,
    }),
  },
  effects: dispatch => ({
    async getUser() {
      try {
        const response = await apiClient.get('/users');
        console.log(response);
      } catch (error) {
        throw error;
      }
    },
    async getCurrentLocationName(payload) {
      dispatch.homeStore.setIsLoading(true);
      try {
        const response = await apiClient.post(
          `/maps/point_name?lat=${payload.lat}&lon=${payload.long}`,
        );
        dispatch.homeStore.setCurrentLocation({
          ...payload,
          fullAddress: response.data.name,
        });
      } catch (error) {
        throw error;
      } finally {
        dispatch.homeStore.setIsLoading(false);
      }
    },
  }),
};

export default homeStore;
