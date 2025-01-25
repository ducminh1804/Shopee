import React from 'react'
import UserNav from '../../components/User/UserNav'

interface Props {
  children?: React.ReactNode
}

export default function UserLayout({ children }: Props) {
  return (
    <div className='w-4/5 mx-auto p-1'>
      <div className='flex gap-2'>
        <div className='flex-[3]'>
          <UserNav />
        </div>
        <div className='flex-[7]'>
          {children}
        </div>
      </div>
    </div>
  )
}
