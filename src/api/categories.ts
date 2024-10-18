import { Category } from "../types/category";
import { SuccessReponse } from "../types/utils.type";
import { http } from "../utils/http";

export const getCategories = () => http.get<SuccessReponse<Category[]>>('/categories')