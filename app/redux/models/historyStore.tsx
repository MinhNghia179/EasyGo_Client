export interface IHistoryStore {}

const initialState: IHistoryStore = {};

const historyStore = {
  state: initialState,
  reducers: {},
  effects: dispatch => ({}),
};

export default historyStore;
