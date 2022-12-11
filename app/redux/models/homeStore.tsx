import { INITIAL_ADDRESS } from '../../constants/constant';
import {
  IBooking,
  ILocation,
  IService,
} from '../../interfaces/home-interfaces';
import apiClient from '../../services/api-client';
export interface IHomeStore {
  AddressVisitedRecently: ILocation[];
  currentLocation: ILocation;
  destination: ILocation;
  routes: any;
  serviceSelected: IService;
  booking: IBooking;
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
  currentLocation: null,
  destination: null,
  routes: [],
  serviceSelected: null,
  booking: null,
};

const homeStore = {
  state: initialState,
  reducers: {
    setCurrentLocation: (state: IHomeStore, payload) => ({
      ...state,
      currentLocation: payload,
    }),
    setDestinationLocation: (state: IHomeStore, payload) => ({
      ...state,
      destination: payload,
    }),

    setRoutes: (state: IHomeStore, payload) => ({
      ...state,
      routes: payload,
    }),
    setServiceSelected: (state: IHomeStore, payload) => ({
      ...state,
      serviceSelected: payload,
    }),
    setBooking: (state: IHomeStore, payload) => ({
      ...state,
      booking: payload,
    }),
    setRemoveState: (state: IHomeStore) => ({
      ...state,
      destination: null,
      serviceSelected: null,
      services: null,
      booking: null,
    }),
  },
  effects: dispatch => ({
    async getCurrentLocationName(payload) {
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
    async getRoute(payload, rootState) {
      const { currentLocation, destination } = rootState.homeStore;
      try {
        const response = await apiClient.post(
          `/maps/route?p0=${currentLocation.fullAddress}&p1=${destination.fullAddress}`,
        );
        dispatch.homeStore.setRoutes(response.data.coordinates);
      } catch (error) {
        throw error;
      }
    },
    async getCalculatePrice(payload, rootState) {
      const { currentLocation, destination } = rootState.homeStore;

      try {
        const response = await apiClient.post(
          `/payments?p0=${currentLocation.fullAddress}&p1=${destination.fullAddress}&serviceId=${payload.id_service}`,
        );

        dispatch.homeStore.setBooking({
          id_booking: new Date().toString(),
          number: 1,
          timer: null,
          id_service: payload.id_service,
          serviceName: payload.name,
          pick_location: currentLocation.fullAddress,
          destination_location: destination.fullAddress,
          calPrice: response.data.calPrice,
          travelDistance: response.data.travelDistance,
        });
      } catch (error) {
        throw error;
      }
    },
    async doCreateBooking(payload, rootState) {
      const { serviceSelected, currentLocation, destination } =
        rootState.homeStore;
      try {
        const payload = {
          id_booking: null,
          number: 1,
          timer: null,
          id_service: serviceSelected?.id_service,
          pick_location: currentLocation?.fullAddress,
          destination_location: destination?.fullAddress,
          status: 'accept',
        };
        const response = await apiClient.post(`/booking/create`, payload);

        if (response.status === 200) {
          dispatch.homeStore.setBooking(response.booking);
        }
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default homeStore;
