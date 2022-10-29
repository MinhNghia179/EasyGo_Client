import { IUser } from '../../interfaces/auth-interface';
import apiClient from '../../services/api-client';

export interface IAuthStore {
  portalUser: IUser;
  session: string;
}

const initialState: IAuthStore = {
  portalUser: null,
  session: '',
};

const authStore = {
  state: initialState,
  reducers: {
    setPortalUser: (state: IAuthStore, payload) => ({
      ...state,
      portalUser: payload,
    }),
    setClientSession: (state: IAuthStore, payload) => ({
      ...state,
      session: payload,
    }),
  },
  effects: dispatch => ({
    async doSignIn(payload) {
      try {
        const response = await apiClient.post(
          `/users/login?id=${payload.userName}`,
        );
        const { session_id, ...user } = response;

        dispatch.authStore.setPortalUser(user);
        dispatch.authStore.setClientSession(session_id);
      } catch (error) {
        throw error;
      }
    },
    async doSignOut() {
      try {
        dispatch.authStore.setPortalUser(null);
        dispatch.authStore.setClientSession('');
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default authStore;
