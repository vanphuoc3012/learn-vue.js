import { ApiClientInterface } from "./models";
import { apiLiveClient } from "./live";
import { apiMockClient } from "./mock";

let env: string = 'mock';

console.log('import.meta.env', JSON.stringify(import.meta.env))
if (import.meta.env && import.meta.env.VITE_API_CLIENT) {
  env = import.meta.env.VITE_API_CLIENT.trim();
}

let apiClient: ApiClientInterface
if (env === 'live') {
  apiClient = apiLiveClient;
} else {
  apiClient = apiMockClient;
}

export {
  apiClient
}