import { IUser } from '../../interfaces/auth-interface';
import apiClient from '../../services/api-client';
export interface IAuthStore {
  portalUser: IUser;
}

const initialState: IAuthStore = {
  portalUser: null,
};

const authStore = {
  state: initialState,
  reducers: {
    setPortalUser: (state: IAuthStore, payload) => ({
      ...state,
      portalUser: payload,
    }),
  },
  effects: dispatch => ({
    async doSignIn(payload) {
      try {
        const response = await apiClient.post(
          `/users/login?id=${payload.userName}`,
        );

        if (response.status === 200) {
          apiClient.setSession(response.data.session_id);
        }

        dispatch.authStore.setPortalUser(response.data.info);
      } catch (error) {
        throw error;
      }
    },
    async doSignOut() {
      try {
        dispatch.authStore.setPortalUser(null);
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default authStore;
