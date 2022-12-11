import { IService } from '../../interfaces/home-interfaces';
import apiClient from '../../services/api-client';

export interface IServiceStore {
  services: IService;
}

const initialState: IServiceStore = {
  services: null,
};

const serviceStore = {
  state: initialState,
  reducers: {
    setServices: (state: IServiceStore, payload: IService) => ({
      ...state,
      services: payload,
    }),
  },
  effects: dispatch => ({
    async doGetServiceList(): Promise<void> {
      try {
        const response = await apiClient.get(`/services`);
        dispatch.serviceStore.setServices(response.data.result);
      } catch (error) {
        throw error;
      }
    },
    async doGetServiceDetails(payload): Promise<void> {
      try {
        return await apiClient.get(`/services/${payload.serviceId}`);
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default serviceStore;
