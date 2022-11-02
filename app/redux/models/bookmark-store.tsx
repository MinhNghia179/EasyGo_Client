import { IBookmark } from '../../interfaces/bookmark-interface';
import apiClient from '../../services/api-client';

export interface IBookmarkStore {
  bookmarks: IBookmark[];
}

const initialState: IBookmarkStore = {
  bookmarks: [],
};

const bookmarkStore = {
  state: initialState,
  reducers: {
    setBookmarkList: (state: IBookmarkStore, payload: IBookmark) => ({
      ...state,
      bookmarks: payload,
    }),
  },
  effects: dispatch => ({
    async doGetBookmarkList() {
      try {
        const response = await apiClient.get(`/bookmarks`);
        dispatch.bookmarkStore.setBookmarkList(response.data.bookmarks);
      } catch (error) {
        throw error;
      }
    },
  }),
};

export default bookmarkStore;
