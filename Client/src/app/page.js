import HomeImage from '@/components/HomeImage/HomeImage'
import Navbar from '@/components/Navbar/Navbar'
import Credentials from "@/components/Credentials/Credentials";
import AboutUs from "@/components/AboutUs/AboutUs"
import UserProfile from '@/components/UserProfile/UserProfile';
import UserDetails from '@/components/UserDetails/UserDetails';
import Seats from '@/components/Seats/Seats';
import Footer from '@/componets/footer/Footer'
import Image from 'next/image'
import Review from '@/componets/review/Review'

export default function Home() {
  return (
    <>
    <div className="bg-slate-200">
      <Review/>
      {/* <h1 className='bg-white text-center text-blue-500'>Testing</h1> */}
      {/* < Navbar /> */}
      {/* < HomeImage /> */}
      {/* < AboutUs /> */}
      {/* < Credentials /> */}
      {/* < UserProfile /> */}

      {/* < UserDetails /> */}
      < Seats />

      < UserDetails />
      <h1 className='bg-white text-center text-blue-500'>Testing</h1>
      <Footer/>
      </div>
    </>
    )
}
