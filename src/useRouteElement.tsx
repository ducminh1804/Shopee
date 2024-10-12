import React, { useState } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'

export default function useRouteElement() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const ProtectedIsNotLogin = () => {
    return isLogin ? <Outlet /> : <Navigate to='/login' />
  }

  const ProtectedIsLogin = () => {
    return !isLogin ? <Outlet /> : <Navigate to='/' />
  }
  let element = useRoutes([
    {
      path: '/',
      element: <ProtectedIsNotLogin />,
      children: [
        {
          path: '',
          index:true,
          element: (
            <MainLayout>
              <ProductList />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedIsLogin />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])

  return element
}
