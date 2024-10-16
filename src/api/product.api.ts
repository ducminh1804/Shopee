import { Products } from "../types/product.type";
import { SuccessReponse } from "../types/utils.type";
import { http } from "../utils/http";

export const getProducts = () => http.get<SuccessReponse<Products>>("/products")