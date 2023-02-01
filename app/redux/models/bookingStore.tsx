import {
  ICreateBookingWizard,
  ITrackBooking,
} from '../../interfaces/booking-interface';
import apiClient from '../../services/api-client';

export interface IBookingStore {
  bookingDetails: any;
  createBookingWizard: ICreateBookingWizard;
  trackBooking: ITrackBooking;
}

const initialState: IBookingStore = {
  bookingDetails: null,
  createBookingWizard: null,
  trackBooking: {
    bookingInfo: null,
    driverPosition: null,
    driverInfo: null,
  },
};

const bookingStore = {
  state: initialState,
  reducers: {
    setBookingDetails: (state: IBookingStore, payload: any) => ({
      ...state,
      bookingDetails: payload,
    }),
    setCreateBookingWizard: (
      state: IBookingStore,
      payload: ICreateBookingWizard,
    ) => ({
      ...state,
      createBookingWizard: payload,
    }),
    setTrackBooking: (state: IBookingStore, payload: any) => ({
      ...state,
      trackBooking: payload,
    }),
    setClearState: () => ({
      state: initialState,
    }),
  },

  effects: dispatch => ({
    async doCreateBookingDetails(payload, rootState): Promise<void> {
      const { pickUp, dropOff, serviceId, totalPrice, notes } =
        rootState.bookingStore.createBookingWizard;
      try {
        return await apiClient.post(`/booking/create`, {
          pickUp: { ...pickUp.location, fullAddress: pickUp.fullAddress },
          dropOff: { ...dropOff.location, fullAddress: dropOff.fullAddress },
          serviceId,
          totalPrice,
          notes,
        });
      } catch (error) {
        throw error;
      }
    },
    async doCancelBooking(payload: {
      bookingId: string;
      driverId: string;
    }): Promise<boolean> {
      try {
        return await apiClient.post(
          `/booking/cancelBooking?bookingId=${payload.bookingId}&driverId=${payload.driverId}`,
        );
      } catch (error) {
        return false;
      }
    },
  }),
};

export default bookingStore;
