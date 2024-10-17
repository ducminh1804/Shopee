import { useQuery } from '@tanstack/react-query'
import AsideFitler from './components/AsideFilter/AsideFitler'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import { getProducts } from '../../api/product.api'
import { getQueryParam } from '../../hooks/getQueryParams'
import Pagination from '../../components/Pagination'
import { productParam } from '../../types/productQueryParam.type'
import { AxiosRequestConfig } from 'axios'
export default function ProductList() {
  const params: productParam = getQueryParam()
  const queryConfig: productParam = {
    category: params.category,
    exclude: params.exclude,
    limit: params.limit,
    name: params.name,
    order: params.order,
    price_max: params.price_max,
    price_min: params.price_min,
    rating_filter: params.rating_filter,
    sort_by: params.sort_by,
    page: params.page
  }
  const getProductsQuery = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => getProducts(queryConfig as AxiosRequestConfig<productParam>)
  })


  const products = getProductsQuery.data?.data.data.products || []
  const pageSize = getProductsQuery.data?.data.data.pagination.page_size || 20
  return (
    <div>
      <div className='grid grid-cols-12 gap-6 p-4'>
        <div className='col-span-3'>
          <AsideFitler />
        </div>
        <div className='col-span-9'>
          <SortProductList />
          <div className='mb-10 grid grid-cols-9 gap-6'>
            {products.map((product) => (
              <div key={product._id} className='col-span-2'>
                <Product product={product} />
              </div>
            ))}
          </div>
          <div className=''>
            <Pagination pageSize={pageSize} />
          </div>
        </div>
      </div>
    </div>
  )
}
