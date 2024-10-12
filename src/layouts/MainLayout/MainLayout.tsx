import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

interface Props {
  children: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <div className='w-full'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
