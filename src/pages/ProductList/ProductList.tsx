import { useQuery } from '@tanstack/react-query'
import AsideFitler from './components/AsideFilter/AsideFitler'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import { getProducts } from '../../api/product.api'
import { getQueryParam } from '../../hooks/getQueryParams'
import Pagination from '../../components/Pagination'

export default function ProductList() {
  const params = getQueryParam()
  const getProductsQuery = useQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts(params)
  })
  const products = getProductsQuery.data?.data.data.products || []
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
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}
