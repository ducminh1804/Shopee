import { isUndefined, omitBy } from "lodash"
import { productParam } from "../types/productQueryParam.type"
import { useQueryParams } from "./useQueryParams"

export const useQueryConfig = () => {
  const params: productParam = useQueryParams()
  const queryConfig: productParam = omitBy(
    {
      category: params.category,
      exclude: params.exclude,
      limit: params.limit,
      name: params.name,
      order: params.order,
      price_max: params.price_max,
      price_min: params.price_min,
      rating_filter: params.rating_filter,
      sort_by: params.sort_by,
      page: params.page || 1
    },
    isUndefined
  )
  return queryConfig
}

