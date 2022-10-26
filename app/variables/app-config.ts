import { cleanEnv, str } from 'envalid';

let envs = cleanEnv(process.env, {
  REACT_APP_API_URL: str({
    devDefault: 'https://61aadfdabfb110001773f328.mockapi.io',
  }),
});

export const API_URL = envs.REACT_APP_API_URL;
