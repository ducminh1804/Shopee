import { useQuery } from '@tanstack/react-query'
import AsideFitler from './components/AsideFilter/AsideFilter'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import { getProducts } from '../../api/product.api'
import { useQueryParams } from '../../hooks/useQueryParams'
import Pagination from '../../components/Pagination'
import { productParam } from '../../types/productQueryParam.type'
import { AxiosRequestConfig } from 'axios'
import { isUndefined, omitBy } from 'lodash'
import Skeleton from '../../components/Skeleton'
import { getCategories } from '../../api/categories'
import { useQueryConfig } from '../../hooks/useQueryConfig'

export default function ProductList() {
  const queryConfig = useQueryConfig()
  const getProductsQuery = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => getProducts(queryConfig as AxiosRequestConfig<productParam>)
  })

  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories()
  })

  const categories = categoriesQuery.data?.data.data || []
  const products = getProductsQuery.data?.data.data.products || []
  const pageSize = getProductsQuery.data?.data.data.pagination.page_size || 20
  return (
    <div>
      <div className='grid grid-cols-12 gap-6 p-4'>
        <div className='col-span-3'>
          <AsideFitler categories={categories} queryConfig={queryConfig} />
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
          </div>
          <div className=''>
            <Pagination queryConfig={queryConfig} pageSize={pageSize} />
          </div>
        </div>
      </div>
    </div>
  )
}
