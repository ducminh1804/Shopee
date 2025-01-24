import { useState } from 'react'
import QuantityController from '../../components/QuantityController'
import { useMutation, useQuery } from '@tanstack/react-query'
import { purchaseStatus } from '../../constants/purchases'
import purchaseApi from '../../api/purchase.api'
import { Product } from '../../types/product.type'
import { queryClient } from '../../main'
import { get } from 'lodash'

export default function Cart() {
  const getPurchasesQuery = useQuery({
    queryKey: ['product', { status: purchaseStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchaseStatus.inCart })
  })
  const updatePurchase = useMutation({
    mutationFn: purchaseApi.updatePurchase
  })

  const deletePurchase = useMutation({
    mutationFn: purchaseApi.deletePurchase,
    onSuccess: () => {
      getPurchasesQuery.refetch()
    }
  })
  const all_purchases = getPurchasesQuery.data?.data.data || []
  const mapQuantityPurchases = () => {
    return all_purchases.reduce((accumulator, current) => {
      return { ...accumulator, [current.product._id]: current.buy_count }
    }, {})
  }
  const initMapQuantity = mapQuantityPurchases()
  const [quantity, setQuantity] = useState<{ [product_id: string]: number }>(initMapQuantity)

  const handleQuantity = (product_id: string, val: number) => {
    setQuantity((prev) => {
      return {
        ...prev,
        [product_id]: val
      }
    })
    updatePurchase.mutate({ product_id: product_id, buy_count: val })
  }

  const handleDelete = (purchase_id: string) => {
    deletePurchase.mutate([purchase_id])
  }

  return (
    <div>
      <div className='div1 px-10 py-4 flex my-2 bg-white mx-4'>
        <div className='flex gap-2 flex-1 align-center justify-left'>
          <input type='checkbox' />
          <span>Sản phẩm</span>
        </div>
        <div className='flex flex-1 flex-direction-row gap-2 justify-between'>
          <div className='px-4'>Đơn giá</div>
          <div className='px-4'>Số Lượng</div>
          <div className='px-4'>Số Tiền</div>
          <div className='px-4'>Thao Tác</div>
        </div>
      </div>

      {getPurchasesQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {all_purchases.map((purchase) => (
            <div key={purchase.product._id} className='div2 px-10 py-4 flex my-2 bg-white mx-4'>
              <div className='flex gap-2 flex-1 align-center justify-left'>
                <input type='checkbox' />
                <div>
                  <div className='flex gap-2 align-center justify-center'>
                    <img className='w-20 h-20' src={purchase.product.image} alt='' />
                    <p>{purchase.product.name}</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 flex-row gap-2 justify-between items-center'>
                <div className='px-4'>{purchase.price}$</div>
                <div className='px-4'>
                  <QuantityController
                    cur_val={quantity[purchase.product._id] || purchase.buy_count}
                    max={100}
                    onDecrease={(val) => handleQuantity(purchase.product._id, val)}
                    onIncrease={(val) => handleQuantity(purchase.product._id, val)}
                  />
                </div>
                <div className='px-4'>
                  {quantity[purchase.product._id] * purchase.price || purchase.buy_count * purchase.price}$
                </div>
                <button
                  onClick={() => handleDelete(purchase._id)}
                  className='px-4 bg-orange rounded p-2 text-white hover:scale-100 active:scale-95'
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div>
        <div className='div1 px-10 py-4 flex my-2 bg-white mx-4'>
          <div className='flex gap-2 flex-1 align-center justify-left items-center'>
            <input type='checkbox' />
            <span>Chọn Tất Cả (1)</span>
            <button className='btn ml-4'>Xóa</button>
          </div>
          <div className='flex flex-1 flex-direction-row gap-2 justify-between items-center'>
            <div className='px-4'>
              Tổng Thanh Toán (0 Sản Phẩm): <span className='text-orange'>💵dsfsfs</span>
            </div>
            <div className='px-4'>
              <button className='bg-orange p-4 text-white rounded transform transition-transform hover:scale-110 active:scale-95'>
                Mua Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
