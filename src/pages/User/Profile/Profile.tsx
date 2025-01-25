import React from 'react'

export default function Profile() {
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
                <input className='h-10 w-full border border-gray-300 focus:outline-none' type='text' />
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Id</td>
              <td>
                <input className='h-10 w-full border border-gray-300 focus:outline-none' type='text' />
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Create at</td>
              <td>
                <input className='h-10 w-full border border-gray-300 focus:outline-none' type='text' />
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Role</td>
              <td>
                <input className='h-10 w-full border border-gray-300 focus:outline-none' type='text' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}