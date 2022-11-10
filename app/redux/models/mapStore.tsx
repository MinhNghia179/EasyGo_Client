import apiClient from '../../services/api-client';

export interface IMapStore {}

const initialState: IMapStore = {};

const mapStore = {
  state: initialState,
  reducers: {},
  effects: dispatch => ({
    async doSearchByLocationName(payload) {
      try {
        const response = await apiClient.post(`/maps/point`, payload);
        if (response.data.code === 200) {
          return response.data.result;
        }
      } catch (error) {
        throw error;
      }
    },
    async doSearchRouteByLocationName(payload) {
      try {
        const response = await apiClient.post(
          `/maps/route?p0=${payload.address1}&p1=${payload.address2}`,
        );
        if (response.data.code === 200) {
          return response.data.result;
        }
      } catch (error) {
        throw error;
      }
    },
    async doSearchByCoordinates(payload) {
      try {
        const response = await apiClient.post(
          `/maps/point_name?lat=${payload.lat}&lon=${payload.long}`,
        );
        if (response.data.code === 200) {
          return response.data.result;
        }
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default mapStore;
