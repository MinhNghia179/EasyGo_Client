import { ICreateBookingWizard } from '../../interfaces/booking-interface';
import apiClient from '../../services/api-client';

export interface IBookingStore {
  bookingDetails: any;
  createBookingWizard: ICreateBookingWizard;
}

const initialState: IBookingStore = {
  bookingDetails: null,
  createBookingWizard: null,
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
  },
  effects: dispatch => ({
    async doCreateBookingDetails(payload, rootState): Promise<void> {
      const { pickUp, dropOff, serviceId, totalPrice } =
        rootState.bookingStore.createBookingWizard;
      try {
        const response = await apiClient.post(`/booking/create`, {
          pickUp: pickUp.location,
          dropOff: dropOff.location,
          serviceId,
          totalPrice,
        });
        dispatch.bookingStore.setBookingDetails(response.data.result.booking);
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
