import {IHighScore} from '../../interfaces';

export interface IGameState {
  highScores: IHighScore[];
}

const initialState: IGameState = {highScores: []};

export const gameStore = {
  state: initialState,
  reducers: {
    setHighScores: (state, payload) => ({
      ...state,
      highScores: payload,
    }),
  },
  effects: () => ({
    doGetHighScores: async () => {
      try {
        const endPoint = ``;

        const res: any = {};

        if (res.status === 200) {
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  }),
};
