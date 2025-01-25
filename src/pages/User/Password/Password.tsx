import React from 'react'

export default function Password() {
  return (
    <div>
      <div className='p-3 border-b-2 border-gray-300'>
        <h2>Đổi Mật Khẩu</h2>
      </div>
      <form action=''>
        <table className='w-full'>
          <tbody>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Nhập Mật Khẩu Cũ</td>
              <td>
                <input className='h-10 w-full border border-gray-300 focus:outline-none' type='text' />
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Nhập Mật Khẩu Mới</td>
              <td>
                <input className='h-10 w-full border border-gray-300 focus:outline-none' type='text' />
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Xác Nhận Mật Khẩu</td>
              <td>
                <input className='h-10 w-full border border-gray-300 focus:outline-none' type='text' />
              </td>
            </tr>
          </tbody>
        </table>
        <button className='mt-7 btn bg-orange px-4 py-2 rounded text-white transition-transform hover:scale-110 focus:scale-90'>
          Xác Nhận
        </button>
      </form>
    </div>
  )
}
