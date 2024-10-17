import classNames from 'classnames'
import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

export default function Pagination() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')

  const limitPage = 20
  const curPage = Number(page)

  console.log('curPage', curPage)
  const pages: number[] = []
  for (let i = curPage - 2; i <= curPage + 2; i++) {
    if (i > 0) pages.push(i)
  }
  // console.log('pages', pages)
  const pagi = Array(20)
    .fill(0)
    .map((_, index) => {
      const pageNumber = index + 1
      console.log(pageNumber)
      if (pageNumber === 1 || pageNumber === 2 || pageNumber === 19 || pageNumber === 20) {
        return (
          <Link
            to={`/?page=${index + 1}`}
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
      }

      if (pages.includes(pageNumber)) {
        return (
          <Link
            to={`/?page=${index + 1}`}
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
      to={`/?page=${curPage - 1}`}
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
    to={`/?page=${curPage + 1}`}
    className={classNames(
      'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
      {
        'pointer-events-none opacity-50 cursor-not-allowed':curPage === limitPage
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
