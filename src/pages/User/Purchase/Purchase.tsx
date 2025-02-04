import React, { useState } from 'react'
import UserPurchase from '../../../components/User/UserPurchase'
import { useQuery } from '@tanstack/react-query'
import { purchaseStatus } from '../../../constants/purchases'
import { createSearchParams, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { useQueryParams } from '../../../hooks/useQueryParams'
import purchaseApi from '../../../api/purchase.api'
import { PurchaseListStatus } from '../../../types/purchase.type'

export default function Purchase() {
  // const [activeTab, setActiveTab] = useState('all')
  const queryParams = useQueryParams()
  const status = Number(queryParams.status)
  console.log(status)
  const tabs = [
    { id: purchaseStatus.all, name: 'Tất cả' },
    { id: purchaseStatus.waitingForConfirmation, name: 'Chờ xác nhận' },
    { id: purchaseStatus.waitingForGetting, name: 'Chờ lấy hàng' },
    { id: purchaseStatus.inProgress, name: 'Đang giao' },
    { id: purchaseStatus.delivered, name: 'Đã giao' },
    { id: purchaseStatus.cancelled, name: 'Đã hủy' }
  ]

  const getPurchasesQuery = useQuery({
    queryKey: ['product', { status: status }],
    queryFn: () => purchaseApi.getPurchases({ status: status as PurchaseListStatus })
  })

  const purchases = getPurchasesQuery.data?.data.data || []

  return (
    <div className='p-4'>
      <div className='flex border-b-2 border-gray-200 p-2 bg-white'>
        {tabs.map((tab) => (
          <NavLink
            to={{
              pathname: '/account/my-purchase',
              search: createSearchParams({
                status: String(tab.id)
              }).toString()
            }}
            key={tab.id}
            className={classNames('p-3 text-gray-600', {
              'text-red-700 border-b-2 font-bold border-red-700': tab.id === status,
              '': tab.id !== status
            })}
          >
            {tab.name}
          </NavLink>
        ))}
      </div>

      {/* Search bar */}
      <div className='mt-4'>
        <input
          type='text'
          placeholder='Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm'
          className='w-full p-2 border border-gray-300 rounded'
        />
      </div>

      {/* Empty state */}
      {purchases.map((item) => (
        <UserPurchase key={item._id} purchase ={item}/>
      ))}
    </div>
  )
}
