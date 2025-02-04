import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const validateSchema = yup.object({
  old_password: yup.string().required('Vui lòng nhập mật khẩu cũ'),
  new_password: yup.string().min(6, 'Mật khẩu phải lớn hơn 6 kí tự').required('Vui lòng nhập mật khẩu mới'),
  confirm_password: yup.string().oneOf([yup.ref('new_password')], 'Mật khẩu không khớp')
})
export default function Password() {
  const formOptions = { resolver: yupResolver(validateSchema) }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm(formOptions)
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div>
      <div className='p-3 border-b-2 border-gray-300'>
        <h2>Đổi Mật Khẩu</h2>
      </div>
      <form onSubmit={onSubmit}>
        <table className='w-full border-separate border-spacing-y-5'>
          <tbody>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Nhập Mật Khẩu Cũ</td>
              <td>
                <input
                  id='old_password'
                  className='h-10 w-full border border-gray-300 focus:outline-none'
                  type='text'
                  {...register('old_password')}
                />
                <div style={{ color: 'red', fontSize: 12 }}>{errors.old_password?.message}</div>
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Nhập Mật Khẩu Mới</td>
              <td>
                <input
                  className='h-10 w-full border border-gray-300 focus:outline-none'
                  type='password'
                  {...register('new_password')}
                />
                <div style={{ color: 'red', fontSize: 12 }}>{errors.new_password?.message}</div>
              </td>
            </tr>
            <tr className='p-2 h-10'>
              <td className='pr-4'>Xác Nhận Mật Khẩu</td>
              <td>
                <input
                  className='h-10 w-full border border-gray-300 focus:outline-none'
                  type='password'
                  {...register('confirm_password')}
                />
                <div style={{ color: 'red', fontSize: 12 }}>{errors.confirm_password?.message}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <button className='mt-7 btn bg-orange px-4 py-2 rounded text-white transition-transform hover:scale-110 active:scale-90'>
          Xác Nhận
        </button>
      </form>
    </div>
  )
}
