import { INITIAL_ADDRESS } from '../../constants/constant';
import { IAddress } from '../../interfaces/home-interfaces';
import apiClient from '../../services/api-client';

export interface IHomeStore {
  AddressVisitedRecently: IAddress[];
}

const initialState: IHomeStore = {
  AddressVisitedRecently: INITIAL_ADDRESS,
};

const homeStore = {
  state: initialState,
  reducers: {},
  effects: dispatch => ({
    async getUser() {
      try {
        const response = await apiClient.get('/users');
        console.log(response);
      } catch (error) {
        throw error;
      }
    },
    async getCurrentLocation() {
      try {
        Geolocation;
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default homeStore;
