import RegisterHeader from '../../components/RegisterHeader'
import Footer from '../../components/Footer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { rules } from '../../utils/RuleInput'
import { IFormInput } from '../../types/IFormInput'
import Input from '../../utils/Input'
import { useMutation } from '@tanstack/react-query'
import { registerUser } from '../../api/auth.api'
import { toast } from 'react-toastify'
import { isAxiosStatusCodeError } from '../../utils/utils'
import { ErrorResponse } from '../../utils/utils.type'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (Object.keys(errors).length === 0) {
      registerMutation.mutate(data, {
        onSuccess: (data) => {
          toast('thanh cong')
        },
        onError: (error) => {
          if (isAxiosStatusCodeError<ErrorResponse<IFormInput>>(error)) {
            const resutl = error.response?.data.data ?? { email: '', password: '' }

            Object.keys(resutl).forEach((key) => {
              const value = resutl[key as keyof IFormInput] // Ép kiểu để đảm bảo an toàn kiểu
              console.log(`Key: ${key}, Value: ${value}`)
              toast.error(`${value}`)
            })
          }
        }
      })
    }
  }

  const registerMutation = useMutation({
    mutationFn: (data: IFormInput) => registerUser(data)
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
