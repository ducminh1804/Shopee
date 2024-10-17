import { useQuery } from '@tanstack/react-query'
import AsideFitler from './components/AsideFilter/AsideFitler'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import { getProducts } from '../../api/product.api'
import { getQueryParam } from '../../hooks/getQueryParams'
import Pagination from '../../components/Pagination'
import { productParam } from '../../types/productQueryParam.type'
import { AxiosRequestConfig } from 'axios'
import { isUndefined, omitBy } from 'lodash'
import Skeleton from '../../components/Skeleton'

export default function ProductList() {
  const params: productParam = getQueryParam()
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
  const getProductsQuery = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => getProducts(queryConfig as AxiosRequestConfig<productParam>)
  })
  console.log(getProductsQuery.isLoading)
  const products = getProductsQuery.data?.data.data.products || []
  const pageSize = getProductsQuery.data?.data.data.pagination.page_size || 20
  return (
    <div>
      <div className='grid grid-cols-12 gap-6 p-4'>
        <div className='col-span-3'>
          <AsideFitler />
        </div>
        <div className='col-span-9'>
          <SortProductList queryConfig={queryConfig} pageSize={pageSize} />
          <div className='mb-10 grid grid-cols-9 gap-6'>
            {getProductsQuery.isLoading
              ? Array(20)
                  .fill(0)
                  .map(
                    (
                      _,
                      index // Assuming you want 6 skeletons
                    ) => (
                      <div key={index} className='col-span-2'>
                        <Skeleton />
                      </div>
                    )
                  )
              : products.map((product) => (
                  <div key={product._id} className='col-span-2'>
                    <Product product={product} />
                  </div>
                ))}

            {/* {products.map((product) => (
              <div key={product._id} className='col-span-2'>
                <Product product={product} />
              </div>
            ))} */}
          </div>
          <div className=''>
            <Pagination queryConfig={queryConfig} pageSize={pageSize} />
          </div>
        </div>
      </div>
    </div>
  )
}
