import { useSearchParams } from 'react-router-dom'

export const getQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  return Object.fromEntries(searchParams)
}
