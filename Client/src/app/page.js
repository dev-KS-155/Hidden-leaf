import HomeImage from '@/components/HomeImage/HomeImage'
import Navbar from '@/components/Navbar/Navbar'
import Credentials from "@/components/Credentials/Credentials";
import AboutUs from "@/components/AboutUs/AboutUs"
import UserProfile from '@/components/UserProfile/UserProfile';
import UserDetails from '@/components/UserDetails/UserDetails';
import Footer from '@/componets/footer/Footer'
import Review from '@/componets/review/Review'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Review/>
      {/* <h1 className='bg-white text-center text-blue-500'>Testing</h1> */}
      {/* < Navbar /> */}
      {/* < HomeImage /> */}
      {/* < AboutUs /> */}
      {/* < Credentials /> */}
      {/* < UserProfile /> */}
      < UserDetails />
      <h1 className='bg-white text-center text-blue-500'>Testing</h1>
      <Footer/>
    </>
  )
}
