import { IBooking, IBookTracking } from '../../interfaces/booking-interface';
import apiClient from '../../services/api-client';

export interface IBookingStore {
  bookingDetails: IBooking;
  bookTracking: IBookTracking;
}

const initialState: IBookingStore = {
  bookingDetails: null,
  bookTracking: null,
};

const bookingStore = {
  state: initialState,
  reducers: {
    setBookingDetails: (state: IBookingStore, payload: IBooking) => ({
      ...state,
      bookingDetails: payload,
    }),
    setBookTracking: (state: IBookTracking, payload: IBookTracking) => ({
      ...state,
      bookTracking: payload,
    }),
  },
  effects: dispatch => ({
    async doCreateBookingDetails(payload): Promise<void> {
      try {
        const response = await apiClient.post(`/booking/create`, payload);
        dispatch.bookingStore.setBookingDetails(response.data.booking);
      } catch (error) {
        throw error;
      }
    },
    async doAcceptBooking(payload, rootState): Promise<void> {
      try {
        const response = await apiClient.post(
          `/booking/acceptBooking?idBooking=${payload.idBooking}`,
        );
        dispatch.bookingStore.setBookTracking({
          bookingDetails: rootState.bookingStore.bookingDetails,
          result: response.data.result,
        });
      } catch (error) {
        throw error;
      }
    },
    async doCancelBooking(payload): Promise<boolean> {
      try {
        const response = await apiClient.post(
          `/booking/cancelBooking?idBooking=${payload.idBooking}`,
        );
        if (response.data.result) {
          dispatch.bookingStore.setBookTracking(null);
        }
        return response.data.result;
      } catch (error) {
        return false;
      }
    },
  }),
};

export default bookingStore;
