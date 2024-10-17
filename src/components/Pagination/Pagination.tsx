import classNames from 'classnames'
import React from 'react'
import { createSearchParams, Link, useParams, useSearchParams } from 'react-router-dom'
import { productParam } from '../../types/productQueryParam.type'

interface Props {
  queryConfig: productParam
  pageSize: number
}
export default function Pagination({ queryConfig, pageSize }: Props) {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')
  const limitPage = pageSize
  const curPage = Number(page)
  const pages: number[] = []
  // const params: any = { ...queryConfig, sort_by: option }

  for (let i = curPage - 2; i <= curPage + 2; i++) {
    if (i > 0) pages.push(i)
  }

  const pagi = Array(limitPage)
    .fill(0)
    .map((_, index) => {
      const pageNumber = index + 1
      const params: any = { ...queryConfig, page: pageNumber }

      if (pageNumber === 1 || pageNumber === 2 || pageNumber === limitPage - 1 || pageNumber === limitPage) {
        return (
          <Link
            // to={`/?page=${index + 1}`}
            to={{
              pathname: '/',
              search: `?${createSearchParams(params)}`
            }}
            key={index}
            className={classNames(
              'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              {
                'bg-gray-600 text-white': curPage === pageNumber
              }
            )}
          >
            {pageNumber}
          </Link>
        )
      }

      if (pages.includes(pageNumber)) {
        return (
          <Link
            // to={`/?page=${index + 1}`}
            to={{
              pathname: '/',
              search: `?${createSearchParams(params)}`
            }}
            key={index}
            className={classNames(
              'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              {
                'bg-gray-400': curPage === pageNumber
              }
            )}
          >
            {pageNumber}
          </Link>
        )
      } else
        return (
          <span
            key={index}
            className={classNames(
              'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              {
                'bg-gray-400': curPage === pageNumber
              }
            )}
          >
            ...
          </span>
        )
    })

  const re = []

  for (let i = 0; i < pagi.length; i++) {
    if (
      Number.isInteger(pagi[i].props.children) ||
      (pagi[i].props.children === '...' &&
        pagi[i - 1].props.children === '...' &&
        pagi[i + 1].props.children !== '...') ||
      (pagi[i].props.children === '...' && pagi[i - 1].props.children !== '...' && pagi[i + 1].props.children !== '...')
    ) {
      re.push(pagi[i])
    }
  }

  const previos = (
    <Link
      key={'prev'}
      // to={`/?page=${curPage - 1}`}
      to={{
        pathname: '/',
        search: `?${createSearchParams({ ...queryConfig, page: curPage - 1 } as any)}`
      }}
      className={classNames(
        'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
        {
          'pointer-events-none opacity-50 cursor-not-allowed': curPage === 1
        }
      )}
    >
      Previos
    </Link>
  )
  const next = (
    <Link
      key={'next'}
      // to={`/?page=${curPage + 1}`}
      to={{
        pathname: '/',
        search: `?${createSearchParams({ ...queryConfig, page: curPage + 1 } as any)}`
      }}
      className={classNames(
        'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
        {
          'pointer-events-none opacity-50 cursor-not-allowed': curPage === limitPage
        }
      )}
    >
      Previos
    </Link>
  )
  re.unshift(previos)
  re.push(next)
  return <div className='flex flex-wrap justify-center'>{re}</div>
}
