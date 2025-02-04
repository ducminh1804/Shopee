import React, { useEffect, useState } from 'react'
import { getUserProfile } from '../../../utils/auth'
import { User } from '../../../types/user.type'
import { useQuery } from '@tanstack/react-query'

export default function Profile() {
  const getProfileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: () => getUserProfile()
  })
  const userProfile = getProfileQuery.data
  console.log(userProfile)
  return (
    <div>
      <div className='p-3 border-b-2 border-gray-300'>
        <h2>Hồ Sơ Của Tôi</h2>
      </div>
      <div className='p-3'>
        <table className='w-full'>
          <tbody>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Email</td>
              <td>
                <input
                  className='p-2 h-10 w-full border border-gray-300 focus:outline-none'
                  type='text'
                  value={userProfile?.email}
                />
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Id</td>
              <td>
                <input
                  className='h-10 w-full border border-gray-300 focus:outline-none p-2'
                  value={userProfile?._id}
                  type='text'
                />
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Create at</td>
              <td>
                <input
                  className='h-10 w-full border border-gray-300 focus:outline-none p-2'
                  value={userProfile?.createdAt}
                  type='text'
                />
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Role</td>
              <td>
                <input className='h-10 w-full border border-gray-300 focus:outline-none p-2' value={userProfile?.roles} type='text' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
