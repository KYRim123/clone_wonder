import React from 'react'
import Center from './Center'
import Header from './Header'
import Footer from './Footer'


export default function LayoutDefault({children}) {
  return (
    <Center>
      <Header />
      {children}
      <Footer/>
    </Center>
  )
}
