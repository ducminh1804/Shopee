import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { priceSchema } from '../../../../utils/RuleInputNumber'
import { IFormPrice } from '../../../../types/IFormPrice'
import Starts from '../../../../components/Starts'
import { createSearchParams, Link } from 'react-router-dom'
import { Category } from '../../../../types/category'
import { productParam } from '../../../../types/productQueryParam.type'
import classNames from 'classnames'

interface Props {
  categories: Category[]
  queryConfig: productParam
}
export default function AsideFitler({ categories, queryConfig }: Props) {
  const { category } = queryConfig
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(priceSchema) })

  const onSubmit: SubmitHandler<IFormPrice> = (data) => {
    console.log(data)
    console.log('errors', errors)
  }
  const isActive = (categoryFilter: string) => {
    return categoryFilter === category
  }

  return (
    <div className='p-4'>
      AsideFitler
      <div className='p-2 font-bold flex items-center gap-2 border-b-2 border-gray-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
          />
        </svg>
        Tất cả danh mục
      </div>
      <div className='p-2'>
        <ul>
          <div className='flex items-center gap-1 text-orange'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-2'>
              <path d='M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z' />
            </svg>
            <span className='font-bold'>THOI TRANG NAM</span>
          </div>
          <li>
            {categories.map((category) => {
              return (
                <div key={category._id} className='pl-4 mb-1'>
                  <Link
                    className={classNames('hover:text-orange', {
                      'font-bold text-orange': isActive(category._id)
                    })}
                    to={{
                      pathname: '/',
                      search: `?${createSearchParams({ ...queryConfig, category: category._id } as any)}`
                    }}
                  >
                    {category.name}
                  </Link>
                </div>
              )
            })}
          </li>
        </ul>
      </div>
      <div className='p-2 font-bold flex items-center gap-2 border-b-2 border-gray-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
          />
        </svg>
        BO LOC TIM KIEM
      </div>
      <div className='p-2 pb-5 border-b-2 border-gray-300'>
        <span>Khoang gia</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex gap-1 justify-between'>
            <div>
              <input className=' rounded w-full max-w-xs' type='text' {...register('price_min')} placeholder='$ TỪ' />
              <span className='text-red-500 text-xs'>{errors.price_min?.message}</span>
            </div>
            -
            <div>
              <input className='w-full max-w-xs' type='text' {...register('price_max')} placeholder='$ ĐẾN' />
              <span className='text-red-500'>{errors.price_max?.message}</span>
            </div>
          </div>
          <button className='w-full mt-2 p-2 btn bg-orange text-white rounded hover:bg-red-500'>AP DUNG</button>
        </form>
      </div>
      <div className='review'>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div className='flex justify-between'>
              <Starts isCur={false} key={index} star={4 - index} title={`${index}__star`} />
              <Link
                to={{
                  pathname: '/',
                  // search: `?${createSearchParams({ ...queryConfig, category: category._id } as any)}`
                  search: `${createSearchParams({ ...queryConfig, rating_filter: 5 - index } as any)}`
                }}
                className='pr-2 hover:text-orange cursor-pointer font-bold'
              >
                {5 - index} Trở lên
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
// https://onetech.vn/blog/thu-vien-validate-du-lieu-huu-ich-cho-lap-trinh-vien-web-frontend-yup-18298
