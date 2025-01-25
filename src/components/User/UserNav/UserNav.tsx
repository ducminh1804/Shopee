import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function UserNav() {
  return (
    <div>
      <div>
        <div className='flex items-center gap-2 border-b-2 border-gray-300 p-1'>
          <img
            className='w-10 h-10'
            src='data:image/png;base64,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'
            alt=''
          />
          <div>
            <span>vo duc minh</span>
          </div>
        </div>
      </div>
      <div className='mt-4 p-2 border-b-2 border-gray-300 flex flex-col gap-5'>
        <NavLink
          to='/account/profile'
          className={({ isActive }) =>
            classNames('hover:text-red-500 p-2', {
              'cursor-pointer text-red-500 text-bold font-bold': isActive,
              '': !isActive
            })
          }
        >
          Profile
        </NavLink>
        <NavLink
          to='/account/change-password'
          className={({ isActive }) =>
            classNames('hover:text-red-500 p-2', {
              'cursor-pointer text-red-500 text-bold font-bold': isActive,
              '': !isActive
            })
          }
        >
          Đổi Mật Khẩu
        </NavLink>
        <NavLink
          to='/account/my-purchase'
          className={({ isActive }) =>
            classNames('hover:text-red-500 p-2', {
              'cursor-pointer text-red-500 text-bold font-bold': isActive,
              '': !isActive
            })
          }
        >
          Đơn Mua
        </NavLink>
      </div>
    </div>
  )
}
// classNames('',{}) tra ve 'style-css class' : string
