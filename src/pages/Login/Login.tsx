import RegisterHeader from '../../components/RegisterHeader'
import Footer from '../../components/Footer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { rules } from '../../utils/RuleInput'
import { IFormInput } from '../../types/IFormInput'
import Input from '../../components/InputUseForm/Input'
import { useMutation } from '@tanstack/react-query'
import { ApiLoginUser } from '../../api/auth.api'
import { toast } from 'react-toastify'
import { isAxiosStatusCodeError } from '../../utils/utils'
import { ErrorResponse } from '../../utils/utils.type'
import { AuthResponse } from '../../types/auth.type'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    loginUserMutation.mutate(data, {
      onSuccess: (data) => {
        const result: AuthResponse = data.data
        // console.log('data', result.data)
        // console.log('user', result.data.user)
        toast('Login thanh cong')
      },
      onError: (error) => {
        if (isAxiosStatusCodeError<ErrorResponse<IFormInput>>(error)) {
          const result = error.response?.data.data ?? { email: '', password: '' }
          Object.keys(result).forEach((key) => {
            const value = result[key as keyof IFormInput] // Ép kiểu để đảm bảo an toàn kiểu
            // console.log(`Key: ${key}, Value: ${value}`)
            toast.error(`${value}`)
          })
        }
      }
    })
  }

  const loginUserMutation = useMutation({
    mutationFn: (data: IFormInput) => ApiLoginUser(data)
  })

  return (
    <div>
      <RegisterHeader />
      <div className='bg-orange py-1'>
        <div className='px-4 my-2'>
          <div className='grid grid-cols-4'>
            <div className='col-start-3 col-span-2'>
              <form onSubmit={handleSubmit(onSubmit)} className='rounded bg-white px-7'>
                <div className='flex justify-between mb-10 pt-2'>
                  <div className='title'>LOGIN</div>
                  <div className='qr'>qr code</div>
                </div>
                <div className='inputform'>
                  <div className='username py-2'>
                    <Input
                      name='email'
                      type='text'
                      placeholder='Email'
                      register={register}
                      rules={rules.email}
                      errorMessage={errors.email?.message}
                    />
                  </div>
                  <div className='password'>
                    <Input
                      name='password'
                      type='text'
                      placeholder='Password'
                      register={register}
                      rules={rules.password}
                      errorMessage={errors.password?.message}
                    />
                  </div>
                </div>
                <button className='rounded bg-orange p-1 w-full mt-2 text-gray-50 '>LOGIN</button>
                <div className='flex justify-between'>
                  <div className='text-blue-500 text-xs'>
                    <a href=''>Forgot password</a>
                  </div>
                  <div className='text-blue-500 text-xs'>
                    <a href=''>Other</a>{' '}
                  </div>
                </div>
                <div className='register flex justify-around'>
                  <span className=' text-xs text-gray-400'>
                    Bạn mới biết đến Shopee?
                    <a className='text-orange' href='#'>
                      Register
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
