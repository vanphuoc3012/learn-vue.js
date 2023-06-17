import { HttpClientInterface } from "./models/HttpClient.interface.ts";
import { HttpClientFetch } from "./models/HttpClient.fetch.ts";
import { HttpClientAxios } from "./models/HttpClient.axios.ts";

let _httpClient: HttpClientInterface | undefined = undefined;

export const useHttpClient = () => {
  if (!_httpClient) {
    const clientType = "fetch";

    if (clientType === "fetch") {
      _httpClient = new HttpClientFetch();
    } else if (clientType === "axios") {
      _httpClient = new HttpClientAxios();
    }
  }

  return _httpClient;
};