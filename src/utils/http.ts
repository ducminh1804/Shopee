import axios from "axios";

export const http = axios.create({
  baseURL: "https://api-ecom.duthanhduoc.com/",
  headers: {
    Accept: 'application/json'
  }
})

http.interceptors.response.use(
  function (response) {
    const {url} = response.config
    console.log('url', url)
    return response;
  },
  function (error) {
    return Promise.reject(error)
  }
)

