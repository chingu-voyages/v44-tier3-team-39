import axios, { AxiosInstance } from 'axios';

const BuildClient = ({ req }: { req?: any }): AxiosInstance => {
  const baseURL = 'https://milestoned-api.onrender.com/';

  if (typeof window === 'undefined') {
    // Server-side rendering (SSR)
    return axios.create({
      baseURL,
      headers: req?.headers,
    });
  } else {
    // Client-side rendering
    return axios.create({
      baseURL,
    });
  }
};

export default BuildClient;
