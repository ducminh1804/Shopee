import { PurchaseListStatus, Purchases } from "../types/purchase.type";
import { SuccessReponse } from "../types/utils.type";
import { http } from "../utils/http";

const URL = 'purchase'
const purchaseApi = {
  addToCart(body: { product_id: string; buy_count: number }) {
    return http.post<SuccessReponse<Purchases>>(`${URL}/add-to-cart`, body)
  },
  getPurchases(params: { status: PurchaseListStatus }) {
    return http.get<SuccessReponse<Purchases[]>>(`${URL}/`, { params })
  }
}


export default purchaseApi;