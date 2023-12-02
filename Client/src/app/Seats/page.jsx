import React from 'react'
import Seats from './Seats'
import Footer from '@/componets/footer/Footer'
import Navbar  from '@/components/Navbar/Navbar'
export default function page() {
  return (
    <div>
      <Navbar/>
      <Seats/>
      <Footer/>
    </div>
  )
}
