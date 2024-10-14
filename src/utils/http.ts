import axios from "axios";
import { AuthResponse } from "../types/auth.type";
import { useSetDataToLS } from "./auth";

export const http = axios.create({
  baseURL: "https://api-ecom.duthanhduoc.com/",
  headers: {
    Accept: 'application/json'
  }
})

http.interceptors.response.use(
  function (response) {
    const { url } = response.config
    if (url === '/login') {

    }
    const { access_token, expires, refresh_token, expires_refresh_token, user } = (response.data as AuthResponse).data;
    useSetDataToLS("access_token", access_token)
    useSetDataToLS("refresh_token", refresh_token)
    useSetDataToLS("profile", user)

    return response;
  },
  function (error) {
    return Promise.reject(error)
  }
)

