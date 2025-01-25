import React, { useState } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import UserLayout from './layouts/UserLayout'
import Profile from './pages/User/Profile'
import Password from './pages/User/Password'
import Purchase from './pages/User/Purchase'

export default function useRouteElement() {
  const isLogin = useSelector<RootState>((state) => state.authReducer.isAuth)

  const ProtectedIsNotLogin = () => {
    return isLogin ? <Outlet /> : <Navigate to='/login' />
  }

  const ProtectedIsLogin = () => {
    return !isLogin ? <Outlet /> : <Navigate to='/' />
  }
  let element = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          index: true,
          element: <ProductList />
        },
        {
          path: ':nameId',
          element: <ProductDetail />
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
    },
    {
      path: '',
      element: <ProtectedIsNotLogin />,
      children: [
        {
          path: '/cart',
          element: (
            <MainLayout>
              <Cart />
            </MainLayout>
          )
        },
        {
          path: '/account/profile',
          element: (
            <MainLayout>
              <UserLayout children={<Profile />} />
            </MainLayout>
          )
        },
        {
          path: '/account/change-password',
          element: (
            <MainLayout>
              <UserLayout children={<Password />} />
            </MainLayout>
          )
        },
        {
          path: '/account/my-purchase',
          element: (
            <MainLayout>
              <UserLayout children={<Purchase />} />
            </MainLayout>
          )
        }
      ]
    }
  ])

  return element
}
