import React, { cloneElement } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { isLogin } from '../authentication.slice'

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>()
  const handleClick = () => {
    dispatch(isLogin())
  }
  return (
    <div>
      ProductList
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
