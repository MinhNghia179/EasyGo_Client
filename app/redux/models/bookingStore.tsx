import { ICreateBookingWizard } from '../../interfaces/booking-interface';
import { ICoordinates } from '../../interfaces/home-interfaces';
import apiClient from '../../services/api-client';

export interface IBookingStore {
  createBookingWizard: ICreateBookingWizard;
  bookingInfo: any;
  driverInfo: any;
  driverPosition: ICoordinates;
}

const initialState: IBookingStore = {
  createBookingWizard: null,
  bookingInfo: null,
  driverPosition: null,
  driverInfo: null,
};

const bookingStore = {
  state: initialState,
  reducers: {
    setCreateBookingWizard: (
      state: IBookingStore,
      payload: ICreateBookingWizard,
    ) => ({
      ...state,
      createBookingWizard: payload,
    }),
    setBookingInfo: (state: IBookingStore, bookingInfo: any) => ({
      ...state,
      bookingInfo,
    }),
    setDriverInfo: (state: IBookingStore, driverInfo: any) => ({
      ...state,
      driverInfo,
    }),
    setDriverPosition: (
      state: IBookingStore,
      driverPosition: ICoordinates,
    ) => ({
      ...state,
      driverPosition,
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
        const response = await apiClient.post(`/booking/create`, {
          pickUp: { ...pickUp.location, fullAddress: pickUp.fullAddress },
          dropOff: { ...dropOff.location, fullAddress: dropOff.fullAddress },
          serviceId,
          totalPrice,
          notes,
        });
        if (response.data.status === 200) {
          dispatch.bookingStore.setBookingInfo(response?.data?.result);
        }
      } catch (error) {
        throw error;
      }
    },
    async doCancelBooking(payload: {
      bookingId: string;
      driverId: string;
      reason?: string;
    }): Promise<boolean> {
      try {
        return await apiClient.post(
          `/booking/cancelBooking?bookingId=${payload.bookingId}&driverId=${payload.driverId}`,
          { reason: payload.reason },
        );
      } catch (error) {
        return false;
      }
    },
  }),
};

export default bookingStore;
