import classNames from 'classnames'
import { createRef, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/images/avatar.jpg'
import { useMutation } from '@tanstack/react-query'
import Profile from '../../../api/profile.api'
import { toast } from 'react-toastify'
export default function UserNav() {
  const [ava, setAva] = useState(avatar)
  const uploadAvatarMutation = useMutation({
    mutationFn: Profile.uploadAvatar
  })
  const uploadInput = useRef<HTMLInputElement>(null)
  const handleUpload = () => {
    uploadInput.current?.click()
  }
  const handleUploadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const f = uploadInput.current?.files[0]
    if (e.target.files) {
      const file = e.target.files[0]
      console.log(file)
      uploadAvatarMutation.mutate(file, {
        onSuccess() {
          toast('upload thanh cong')
        }
      })
    }
  }
  useEffect(() => {
    console.log(ava)
  }, [ava])
  return (
    <div>
      <div>
        <div className='flex items-center gap-2 border-b-2 border-gray-300 p-1'>
          <div className='flex flex-col items-center'>
            <img className='w-20 h-20' src={ava} alt='' />
            <input onChange={(e) => handleUploadAvatar(e)} ref={uploadInput} type='file' accept='.png,.jpg' />
            <button
              onClick={handleUpload}
              className='text-gray-400 mt-1 border border-gray-400 rounded transition-transform active:scale-90 active:bg-gray-300 border-black p-2 text-xs'
            >
              Chọn Ảnh
            </button>
          </div>

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
          to='/account/my-purchase?status=0'
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
