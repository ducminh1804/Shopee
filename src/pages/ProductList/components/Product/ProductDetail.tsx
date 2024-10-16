import Starts from '../../../../components/Starts'
import { Product, Products } from '../../../../types/product.type'
import { discount, formatNumber } from '../../../../utils/utils'

interface Props {
  product: Product
}
export default function ProductDetail(props: Props) {
  const { product } = props
  return (
    <div className='h-full mt-1'>
      <div className='h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
          <img className='rounded-t-lg h-48 object' src={product.image} />
        </a>
        <div className=' p-1 flex flex-col justify-start '>
          <p className='mb-3  font-normal text-gray-700'>{product.name.slice(0, 45)}... </p>
          <div className='text-orange'>
            <span>{formatNumber(product.price)}</span>
            <span className='text-xs ml-2 bg-price'>{discount(product.price, product.price_before_discount)}%</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-xs text-center'>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
