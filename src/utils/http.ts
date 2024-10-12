import axios from "axios";

export const http = axios.create({
  baseURL: "https://api-ecom.duthanhduoc.com/",
  headers: {
    Accept: 'application/json'
  }
})

