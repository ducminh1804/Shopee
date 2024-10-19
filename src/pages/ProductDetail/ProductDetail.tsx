import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { getQueryParam } from '../../hooks/getQueryParams'
import { getProductById } from '../../api/product.api'
import classNames from 'classnames'
import Starts from '../../components/Starts'
import { discount, formatNumber } from '../../utils/utils'

export default function ProductDetail() {
  const { nameId } = useParams()
  const productQuery = useQuery({
    queryKey: ['product', nameId],
    queryFn: () => getProductById(nameId as string)
  })
  console.log('nameId', nameId)
  const product = productQuery.data?.data.data
  console.log(product)
  return (
    <div className='py-6 px-6'>
      fds
      <div className='py-4'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-5'>
              <div className='relative w-full pt-[100%] shadow'>
                <img src={product?.image} alt='' className='absolute top-0 left-0 h-full w-full' />
              </div>
              <div className='relative mt-2 grid grid-cols-5 gap-3'>
                <button className='text-red-600 absolute left-0 -translate-y-1/2 top-1/2 z-10'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-8'>
                    <path
                      fillRule='evenodd'
                      d='M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='text-red-600 absolute right-0 -translate-y-1/2 top-1/2 z-10'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-8'>
                    <path
                      fillRule='evenodd'
                      d='M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                {product?.images.slice(0, 5).map((item, index) => {
                  const isActive = index === 1
                  return (
                    <img
                      key={item}
                      className={classNames({
                        'border-orange border-2': isActive
                      })}
                      src={item}
                      alt=''
                    />
                  )
                })}
              </div>
            </div>
            <div className='col-span-7'>
              <div className='container'>
                <h1 className='font-medium upcase mb-3'>{product?.name}</h1>
                <div className='info flex items-center mb-3 gap-2'>
                  <div className='rating__start flex gap-1 items-center '>
                    <p className=''>{product?.rating}</p>
                    <Starts key={product?._id} star={5} cur={product?.rating} isCur={true} title={'start'} size={5} />
                  </div>
                  <div className='sold'>
                    {product?.sold} <span className='text-gray-500'>Đã bán</span>
                  </div>
                </div>
                <div className='bg-gray-300 p-4 flex items-center gap-3'>
                  <div className='before__price'>{formatNumber(Number(product?.price_before_discount))}</div>
                  <div className='text-orange text-xl'>{formatNumber(Number(product?.price))}</div>
                  <div className='bg-orange text-white font-bold text-xs'>
                    {discount(Number(product?.price), Number(product?.price_before_discount))}%
                  </div>
                </div>
                <div>soluong</div>
                <div className="action">
                  <button className='text-xs text-orange border-1 p-3 rounded bg-gray-400'>Thêm Vào Giỏ Hàng</button>
                  <button className='my-2 mx-2 text-xs text-white border-1 p-3 rounded bg-orange'>Mua Ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
