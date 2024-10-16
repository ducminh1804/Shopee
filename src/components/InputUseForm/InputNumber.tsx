import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {

  errorMessage?: string
}

export default function Input({ errorMessage }: InputProps) {
  return (
    <div>
      <span className='text-red-600'>{errorMessage}</span>
      {/* {errors.email && <span className='text-red-600'>{errors.email.message}</span>} */}
    </div>
  )
}
