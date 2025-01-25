import React from 'react'

export default function UserPurchase() {
  return (
    <div className='mt-2'>
      <div className='div2 px-10 py-4 flex bg-white border-b-2 border-black-200 rounded'>
        <div className='flex gap-2 flex-1 align-center justify-left'>
          <div className='flex gap-2 align-center justify-center'>
            <img
              className='w-20 h-20'
              src='https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3jlhma0xqco5b_tn'
              alt=''
            />
            <div>
              <p>temsp</p>
              <p>x2</p>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-row gap-2 justify-between items-center '>
          <div className='px-4'>$</div>

          <div className='px-4'>price</div>
        </div>
      </div>
      <div className='bg-white rounded h-10 p-2 flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='text-xs'>Ngày Tạo Đơn Hàng: </div>
          <div className='text-xs'>123</div>
        </div>
        <div className='flex items-center'>
          <div className='text-xs'>Thành Tiền: </div>
          <div className='text-xs'>123</div>
        </div>
      </div>
    </div>
  )
}
