import classNames from 'classnames'
import { orderOption, productParam, sortOption } from '../../../../types/productQueryParam.type'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { Category } from '../../../../types/category'

interface Props {
  queryConfig: productParam
  pageSize: number
}

export default function SortProductList({ queryConfig, pageSize }: Props) {
  //lay ra cac queryParam de so sanh voi button de xem no dc active hay chua
  const { sort_by, order } = queryConfig
  const navigate = useNavigate()
  const isActive = (sortOption: Exclude<sortOption['sort_by'], undefined>) => {
    return sort_by === sortOption
  }
  const isOrderPriceActive = (orderOption: Exclude<orderOption['order'], undefined>) => {
    return order === orderOption
  }

  const handleClick = (option: Exclude<sortOption['sort_by'], undefined>) => {
    const params: any = { ...queryConfig, sort_by: option }
    navigate({
      pathname: '/',
      search: `?${createSearchParams(params)}`
    })
  }

  //de tranh nguoi dung truyen order !== asc va desc=> dinh nghia kieu:Exclude<orderOption['order'],undefined>=> (parameter) option: "desc" | "asc"
  const handleChange = (option: Exclude<orderOption['order'], undefined>) => {
    console.log(option)
    const params: any = { ...queryConfig, order: option }
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
            className={classNames(' p-2 rounded text-black bg-white   border-2', {
              'bg-black text-white font-bold': isActive('view')
            })}
            onClick={() => handleClick('view')}
          >
            Phổ Biến
          </button>
          <button
            className={classNames(' p-2 rounded text-black bg-white  border-2', {
              'bg-black text-white font-bold': isActive('createdAt')
            })}
            onClick={() => handleClick('createdAt')}
          >
            Mới Nhất
          </button>
          <button
            className={classNames(' p-2 rounded text-black bg-white  border-2', {
              'bg-black text-white font-bold': isActive('sold')
            })}
            onClick={() => handleClick('sold')}
          >
            Bán Chạy
          </button>
          <select
            className='bg-orange text-white'
            name='price'
            id='cars'
            onChange={(event) => handleChange(event.target.value as Exclude<orderOption['order'], undefined>)}
          >
            <option className='w' value=''>
              Giá
            </option>
            <option className='bg-white text-black' value='asc'>
              Giá: Thấp đến cao
            </option>
            <option className='bg-white text-black' value='desc'>
              Giá: Cao đến thấp
            </option>
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
