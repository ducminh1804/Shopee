import { IFormInput } from "../types/IFormInput";
import { http } from "../utils/http";

// export  interface IFormInput {
//   email: string            => day la 1 obj
//   password: string
// }
export const registerUser = (body: IFormInput) => http.post('/register', body)
export const ApiLoginUser = (body: IFormInput) => http.post('/login', body)
export const ApiLogOut = () => http.post('/logout')