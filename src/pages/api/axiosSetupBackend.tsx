import axios from "axios";

const createAxiosClient = (baseURL: string) => {
  const client = axios.create({ baseURL } );

  // MiddleWare can be added here
  // client.interceptors.request.use (request => {
  //     // Middleware request
  //     request.headers?.common["Accept-Encoding"] = "gzip,deflate,compress";
  // })

  client.defaults.headers.common["Accept-Encoding"] = "gzip,deflate,compress";

  // client.interceptors.response.use (response => {
  //     // Middleware respone
  // })

  return client;
};

export const api = {
  open5e: createAxiosClient("https://api.open5e.com/"),
  local: createAxiosClient(""),
};

