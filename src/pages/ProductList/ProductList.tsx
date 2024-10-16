import AsideFitler from './components/AsideFilter/AsideFitler'
import Product from './components/Product'
import SortProductList from './components/SortProductList'

export default function ProductList() {
  return (
    <div>
      <div className='grid grid-cols-12 gap-6 p-4'>
        <div className='col-span-3'>
          <AsideFitler />
        </div>
        <div className='col-span-9'>
          <SortProductList />
          <div className='grid grid-cols-9 gap-6'>
            {Array(30)
              .fill(0)
              .map((_, index) => (
                <div className='col-span-2'>
                  <Product key={index} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
