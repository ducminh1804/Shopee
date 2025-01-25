import axios from "axios";
import { AuthResponse } from "../types/auth.type";
import { clearLS, useSetDataToLS } from "./auth";
import { clear } from "console";

export const http = axios.create({
  baseURL: "https://api-ecom.duthanhduoc.com/",
  headers: {
    Accept: 'application/json'
  }
})

http.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  function (response) {
    const { url } = response.config
    if (url === '/login') {
      const { access_token, refresh_token, user } = (response.data as AuthResponse).data;
      useSetDataToLS("access_token", access_token)
      useSetDataToLS("refresh_token", refresh_token)
      useSetDataToLS("profile", user)
    } else if (url === '/logout') {
      clearLS()
    }
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      clearLS()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
// https://codestus.com/posts/axios-interceptors-tai-sao-chung-ta-can-no