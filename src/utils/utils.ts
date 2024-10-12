import axios, { AxiosError } from "axios"
import HttpStatusCode from "../constants/httpStatusCode.enum"

//ktra xem co phai loi do axios k
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}


//loi lien quan den cac status code
export function isAxiosStatusCodeError<T>(error: unknown): error is AxiosError<T> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
