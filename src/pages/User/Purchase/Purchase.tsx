import React, { useState } from 'react'
import UserPurchase from '../../../components/User/UserPurchase'

export default function Purchase() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'Tất cả' },
    { id: 'waiting_payment', label: 'Chờ thanh toán' },
    { id: 'shipping', label: 'Vận chuyển' },
    { id: 'waiting_delivery', label: 'Chờ giao hàng' },
    { id: 'completed', label: 'Hoàn thành' },
    { id: 'cancelled', label: 'Đã hủy' },
    { id: 'return_refund', label: 'Trả hàng/Hoàn tiền' }
  ]

  return (
    <div className='p-4'>
      {/* Tabs */}
      <div className='flex border-b-2 border-gray-200 p-2 bg-white'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 text-gray-600 ${
              activeTab === tab.id ? 'text-red-700 border-b-2 font-bold border-red-700' : ''
            }`}
          >
            {tab.label}
          </button>
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
      <UserPurchase />
    </div>
  )
}
