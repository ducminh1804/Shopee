import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface InputProps {
  onIncrease?: (val: number) => void
  onDecrease?: (val: number) => void
  cur_val: number
  max: number
}
export default function QuantityController({ onIncrease, onDecrease, cur_val, max }: InputProps) {
  const increase = () => {
    const newVal = cur_val + 1
    onIncrease && onIncrease(newVal)
  }
  const decrease = () => {
    const newVal = cur_val - 1
    onDecrease && onDecrease(newVal)
  }
  return (
    <div>
      <style>
        {`
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
          }
        `}
      </style>
      <div className='flex items-center my-1 border-1'>
        <span className='pr-2'>Số lượng</span>
        <button onClick={decrease} disabled={cur_val === 0} className='border bg-white px-2'>
          -
        </button>
        <input type='number' className='text-center w-12 focus:outline-none' value={cur_val} />
        <button onClick={increase} disabled={cur_val === max} className='border bg-white px-2'>
          +
        </button>
      </div>
    </div>
  )
}
