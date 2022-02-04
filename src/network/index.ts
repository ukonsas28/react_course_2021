import axios, { AxiosRequestConfig } from "axios";

export const makeRequest = async ({
  url,
  method = "GET",
  headers = {},
  params = {},
  data = {},
}: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url: `https://jsonplaceholder.typicode.com/${url}`,
      params,
      data,
      headers,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
