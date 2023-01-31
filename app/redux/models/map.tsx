import axios from 'axios';
import Config from 'react-native-config';
import { ICoordinates } from '../../interfaces/home-interfaces';
import apiClient from '../../services/api-client';

export interface IMapStore {}

const initialState: IMapStore = {};

const map = {
  state: initialState,
  reducers: {},
  effects: dispatch => ({
    async getCurrentLocationName(payload: ICoordinates): Promise<void> {
      try {
        const response = await axios.get(
          `${Config.GOOGLE_BASE_URL}/Locations/${payload.latitude},${payload.longitude}?key=${Config.GOOGLE_REST_API_KEY}`,
        );
        const addressDetails =
          response.data.resourceSets[0].resources[0].address;
        if (addressDetails) {
          const shortAddress = addressDetails.addressLine;
          const fullAddress = addressDetails.formattedAddress.replace(
            `${addressDetails.postalCode}`,
            '',
          );
          dispatch.authStore.setCurrentLocation({
            shortAddress,
            fullAddress,
            location: payload,
          });
        }
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

export default map;
