import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQueryParams } from '../../hooks/useQueryParams'
import { getProductById } from '../../api/product.api'
import classNames from 'classnames'
import Starts from '../../components/Starts'
import { discount, formatNumber, getIdFromNameId } from '../../utils/utils'
import { useEffect, useMemo, useState } from 'react'
import { Product } from '../../types/product.type'
import QuantityController from '../../components/QuantityController'
import purchaseApi from '../../api/purchase.api'
import { Purchases } from '../../types/purchase.type'
import { SuccessReponse } from '../../types/utils.type'
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { queryClient } from '../../main'
import { purchaseStatus } from '../../constants/purchases'

export default function ProductDetail() {
  const { nameId } = useParams()
  const id = getIdFromNameId(nameId as string)
  const [activeImg, setActiveImg] = useState('')
  const [quantity, setQuantity] = useState(1)
  const productQuery = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id as string)
  })

  const addToCartMutations = useMutation({
    mutationFn: (product: Product) => {
      return purchaseApi.addToCart({ product_id: product._id, buy_count: quantity })
    }
  })
  const product = productQuery.data?.data.data as Product
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const currentImages = useMemo(() => product?.images.slice(...currentIndexImages) || [], [currentIndexImages, product])

  const handleLeft = () => {
    if (currentIndexImages[0] > 0) setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1])
  }

  const handleRight = () => {
    if (currentIndexImages[1] < product.images.length) setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1])
  }
  const handleMouseEnter = (src: string) => {
    setActiveImg(src)
  }

  useEffect(() => {
    setActiveImg(currentImages[0])
  }, [product])

  const handleQuantity = (quantity: number) => {
    setQuantity(quantity)
  }

  const addToCart = () => {
    addToCartMutations.mutate(product, {
      onSuccess: () => {
        toast.success('Thêm vào giỏ hàng thành công')
        queryClient.invalidateQueries({
          queryKey: ['product', { status: purchaseStatus.inCart }]
        })
      }
    })
  }
  return (
    <div className='py-6 px-6'>
      <div className='py-4'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-5'>
              <div className='relative w-full pt-[100%] shadow'>
                {productQuery.isLoading ? (
                  <div className='skeleton'>
                    <div
                      role='status'
                      className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'
                    >
                      <div className='flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700'>
                        <svg
                          className='w-10 h-10 text-gray-200 dark:text-gray-600'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 18'
                        >
                          <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img src={activeImg} alt='' className='absolute top-0 left-0 h-full w-full' />
                )}
              </div>
              <div className='relative mt-2 grid grid-cols-5 gap-3'>
                <button
                  onClick={handleLeft}
                  className='bg-gray-400 text-red-600 absolute left-0 -translate-y-1/2 top-1/2 z-10'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-8'>
                    <path
                      fillRule='evenodd'
                      d='M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button
                  onClick={handleRight}
                  className='bg-gray-400 text-red-600 absolute right-0 -translate-y-1/2 top-1/2 z-10'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-8'>
                    <path
                      fillRule='evenodd'
                      d='M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                {currentImages.map((item, index) => {
                  // const isActive = index === 1
                  const isActive = item === activeImg
                  return (
                    <img
                      onMouseEnter={() => handleMouseEnter(item)}
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
                <div>
                  <QuantityController
                    cur_val={quantity}
                    max={100}
                    onIncrease={handleQuantity}
                    onDecrease={handleQuantity}
                  />
                </div>
                <div className='action'>
                  <button onClick={addToCart} className='text-xs text-orange border-1 p-3 rounded bg-gray-400'>
                    Thêm Vào Giỏ Hàng
                  </button>
                  <button className='my-2 mx-2 text-xs text-white border-1 p-3 rounded bg-orange'>Mua Ngay</button>
                </div>
              </div>
            </div>
          </div>
          <div className='container mt-5 p-5 bg-white'>
            <h1 className='font-bold'>CHI TIẾT SẢN PHẨM</h1>
            <div>
              <div
                className='pt-2 pl-5'
                dangerouslySetInnerHTML={{
                  __html: product?.description as string
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
