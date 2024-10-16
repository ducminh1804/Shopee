import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
  name: string
  placeholder: string
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  register: UseFormRegister<any>
  rules?: RegisterOptions<any, string>
}

export default function Input({ name, placeholder, type, errorMessage, register, rules }: InputProps) {
  return (
    <div>
      <input {...register(name, rules)} type={type} placeholder={placeholder} className='w-full borde r rounded p-1' />
      <span className='text-red-600'>{errorMessage}</span>
      {/* {errors.email && <span className='text-red-600'>{errors.email.message}</span>} */}
    </div>
  )
}
