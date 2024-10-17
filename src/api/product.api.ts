import { AxiosRequestConfig } from "axios";
import { Products } from "../types/product.type";
import { productParam } from "../types/productQueryParam.type";
import { SuccessReponse } from "../types/utils.type";
import { http } from "../utils/http";

export const getProducts = (params: AxiosRequestConfig<productParam>) => http.get<SuccessReponse<Products>>("/products", { params })