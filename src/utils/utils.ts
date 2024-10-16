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


export const formatNumber = (data: number) => {
  return new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(data)
}
export const discount = (a: number, b: number) => {
  return formatNumber((a - b) / a * 100)
}