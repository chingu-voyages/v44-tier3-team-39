import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const BuildClient = ({ req }: { req: any }): AxiosInstance => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL: 'http://localhost:4000',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseURL: '/',
    });
  }
};

export default BuildClient;
