import { cleanEnv, str } from 'envalid';

let envs = cleanEnv(process.env, {
  REACT_APP_API_URL: str({
    devDefault: 'http://13.127.11.84:8085',
  }),
  REACT_APP_GOOGLE_API_KEY: str({
    devDefault:
      'ArzpuCDVJkcuBXSWS_vXCeRRbDh1OJssB_wGAKCF1MVYLBwxDafuw5q0CcLYo1Y0',
  }),
});

export const API_URL = envs.REACT_APP_API_URL;
export const GOOGLE_API_KEY = envs.REACT_APP_GOOGLE_API_KEY;
