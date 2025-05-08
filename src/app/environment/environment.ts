import { EnvironmentConfiguration } from '../models/environment-configuration';

const serverUrl = 'https://localhost:7070/api';

export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile: 'user-profiles',
  },
  // adb2cConfig: {
  //     clientId:
  // }
  cacheTimeInMinutes: 30,
};
