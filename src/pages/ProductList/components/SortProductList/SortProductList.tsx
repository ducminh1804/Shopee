import classNames from 'classnames'
import { productParam, sortOption } from '../../../../types/productQueryParam.type'
import { cloneElement, MouseEventHandler } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

interface Props {
  queryConfig: productParam
  pageSize: number
}

export default function SortProductList({ queryConfig, pageSize }: Props) {
  const { sort_by } = queryConfig
  const navigate = useNavigate()
  const isActive = (sortOption: Exclude<sortOption['sort_by'], undefined>) => {
    return sort_by === sortOption
  }

  const handleClick = (option: Exclude<sortOption['sort_by'], undefined>) => {
    const params: any = { ...queryConfig, sort_by: option }
    navigate({
      pathname: '/',
      search: `?${createSearchParams(params)}`
    })
  }

  return (
    <div className='flex justify-between items-center p-5 bg-white'>
      <div className='flex justify-between gap-4 items-center'>
        <div className='title'>Sắp xếp theo</div>
        <div className='option flex gap-7'>
          <button
            className={classNames(' p-2 rounded text-black bg-white active:bg-orange active:text-white border-2', {
              'bg-blue-600 text-black': isActive('view')
            })}
            onClick={() => handleClick('view')}
          >
            Phổ Biến
          </button>
          <button
            className={classNames(' p-2 rounded text-black bg-white active:bg-orange active:text-white border-2', {
              'bg-blue-600 text-black': isActive('createdAt')
            })}
            onClick={() => handleClick('createdAt')}
          >
            Mới Nhất
          </button>
          <button
            className={classNames(' p-2 rounded text-black bg-white active:bg-orange active:text-white border-2', {
              'bg-blue-600 text-black': isActive('sold')
            })}
            onClick={() => handleClick('sold')}
          >
            Bán Chạy
          </button>
          <select name='cars' id='cars'>
            <option value='saab'>Giá</option>
            <option value='opel'>Giá: Thấp đến cao</option>
            <option value='audi'>Giá: Cao đến thấp</option>
          </select>
        </div>
      </div>
      <div className='pagination flex items-center gap-2'>
        <div>1/17</div>
        <div className='p-2 bg-gray-500'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-5'>
            <path
              fillRule='evenodd'
              d='M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='p-2 bg-gray-500'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-5'>
            <path
              fillRule='evenodd'
              d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
