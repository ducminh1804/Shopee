import { PurchaseListStatus, Purchases } from "../types/purchase.type";
import { SuccessReponse } from "../types/utils.type";
import { http } from "../utils/http";

const URL = 'purchases'
const purchaseApi = {
  addToCart(body: { product_id: string; buy_count: number }) {
    return http.post<SuccessReponse<Purchases>>(`${URL}/add-to-cart`, body)
  },
  getPurchases(params: { status: PurchaseListStatus }) {
    return http.get<SuccessReponse<Purchases[]>>(`${URL}/`, { params })
  },
  // kieu du lieu array obj {product_id: string, buy_count: number}[]
  buyPurchases(body: { product_id: string, buy_count: number }[]) {
    return http.post<SuccessReponse<Purchases[]>>(`${URL}/buy-products`, body)
  },
  updatePurchase(body: { product_id: string; buy_count: number }) {
    return http.put<SuccessReponse<Purchases>>(`${URL}/update-purchase`, body)
  },
  deletePurchase(purchase_id: string[]) {
    return http.delete<SuccessReponse<{ "deleted_count": number }>>(`${URL}`, {
      data: purchase_id
    })
  }


}
export default purchaseApi;