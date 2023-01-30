import { ICreateBookingWizard } from '../../interfaces/booking-interface';
import { ICoordinates } from '../../interfaces/home-interfaces';
import apiClient from '../../services/api-client';

export interface IBookingStore {
  bookingDetails: any;
  createBookingWizard: ICreateBookingWizard;
  trackBooking: {
    bookingInfo: any;
    driverPosition: ICoordinates;
  };
}

const initialState: IBookingStore = {
  bookingDetails: null,
  createBookingWizard: null,
  trackBooking: {
    bookingInfo: null,
    driverPosition: null,
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
