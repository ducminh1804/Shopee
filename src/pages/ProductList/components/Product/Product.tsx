import { Link } from 'react-router-dom'
import Starts from '../../../../components/Starts'
import { Product as ProductType, Products } from '../../../../types/product.type'
import { discount, formatNumber, generateNameId } from '../../../../utils/utils'

interface Props {
  product: ProductType
}
export default function Product(props: Props) {
  const { product } = props
  return (
    <Link to={`/${generateNameId(product.name, product._id)}`}>
      <div className='h-full mt-1'>
        <div className='h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <img className='rounded-t-lg h-48 object' src={product.image} />
          <div className=' p-1 flex flex-col justify-start '>
            <p className='mb-3  font-normal text-gray-700'>{product.name.slice(0, 45)}... </p>
            <div className='text-orange'>
              <span>{formatNumber(product.price)}</span>
              <span className='text-xs ml-2 bg-price'>{discount(product.price, product.price_before_discount)}%</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-xs text-center'>{product.rating}</span>
              <Starts key={product._id} star={5} cur={product.rating} isCur={true} title={'start'} size={5} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
