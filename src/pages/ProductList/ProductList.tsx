import { useQuery } from '@tanstack/react-query'
import AsideFitler from './components/AsideFilter/AsideFitler'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import { getProducts } from '../../api/product.api'
import { useState } from 'react'

export default function ProductList() {
  const getProductsQuery = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts()
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
          <div className='grid grid-cols-9 gap-6'>
            {products.map((product) => (
              <>
                <div className='col-span-2'>
                  <Product key={product._id} product={product} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
